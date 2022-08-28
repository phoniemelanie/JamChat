from flask import Flask, jsonify, request
import db
from bson import ObjectId, json_util
import requests
import config
import secrets
import base64


app = Flask(__name__)

response_header = {
    "Access-Control-Allow-Origin": config.backend_origin
}

@app.route("/data")
def data():
    uid = ObjectId("6309b33c7cacc487a2739214")
    user = db.user_collection.find_one({"_id": uid})
    print(user["friends"])
    
    live = []
    for friend_id in user["friends"]:
        friend = db.user_collection.find_one({"_id": ObjectId(friend_id)})
        live_data = {}
        live_data["_id"] = friend["_id"]
        live_data["username"] = friend["username"]
        live_data["profile_picture"] = friend["profile_picture"]
        live_data["is_live"] = True
        
        if "currently_listening" in friend.keys() and friend["currently_listening"] is not None:
            live_data["spotify_uri"] = friend["currently_listening"]
            live.append(live_data)
            
    favs = []
    for friend_id in user["friends"]:
        friend = db.user_collection.find_one({"_id": friend_id})
        
        if "top_tracks" in friend.keys():
            top_tracks = friend["top_tracks"]
            for uri in top_tracks:
                favs_data = {}
                favs_data["_id"] = friend["_id"]
                favs_data["username"] = friend["username"]
                favs_data["profile_picture"] = friend["profile_picture"]
                favs_data["uri"] = uri
                favs_data["is_live"] = False
                favs.append(favs_data)
    data = live + favs
    return json_util.dumps(data), response_header

# Tomorrow: authentication, spotify tokens, get live tracks from spotify, calculate similarities, deployment
@app.route("/spotify-callback")
def spotify_callback():
    try:
        code = request.args["code"]
        uid = request.args["state"]
    except:
        return "something went wrong, please contact developers", 400
    user = db.user_collection.find_one({"_id": ObjectId(uid)})
    body = {}
    body["grant_type"] = "authorization_code"
    body["code"] = code
    body["redirect_uri"] = config.redirect_uri
    body["client_id"] = config.spotify_client_id
    body["client_secret"] = secrets.spotify_client_secret
    url = "https://accounts.spotify.com/api/token"
    response = requests.post(url, data=body)
    print(response.content)
    print(response.status_code)
    if response.status_code != 200:
        return "Something went wrong, please contact developers", 400
    response_json = response.json()
    access_token = response_json["access_token"]
    refresh_token = response_json["refresh_token"]
    user["access_token"] = access_token
    user["refresh_token"] = refresh_token
    db.user_collection.update_one({"_id": user["_id"]}, {"$set": user})
    return json_util.dumps(user)

# API to retrieve all users in DB
@app.route("/getUsers", methods=["POST"])
def getAll():
    all_users = db.user_collection.find()

    return json_util.dumps(all_users), response_header

if __name__ == '__main__':
    app.run(port=8000)