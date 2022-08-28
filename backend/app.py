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

@app.route("/home")
def data():
    input_json = request.get_json(force=True)
    uid = input_json["user_id"]
    user = db.user_collection.find_one({"_id": uid})
    data = []
    for friend_id in user["friends"]:
        friend = db.user_collection.find_one({"_id": friend_id})
        # hard-coded embed uri for now
        friend["spotify_uri"] = "spotify:track:4qDHt2ClApBBzDAvhNGWFd"
        data.append(friend)
    return json_util.dumps(data), response_header

# Tomorrow: authentication, spotify tokens, get live tracks from spotify, calculate similarities, deployment
@app.route("/spotify-callback")
def spotify_callback():
    code = request.args["code"]
    uid = request.args["state"]
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

    return json_util.dumps(user)

# API to retrieve all users in DB
@app.route("/getUsers", methods=["POST"])
def getAll():
    all_users = db.user_collection.find()

    return json_util.dumps(all_users), response_header

if __name__ == '__main__':
    app.run(port=8000)