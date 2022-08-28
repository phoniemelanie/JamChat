from flask import Flask, jsonify, request
import db
from bson import ObjectId, json_util

app = Flask(__name__)

@app.route("/data")
def data():
    input_json = request.get_json(force=True)
    uid = input_json["user_id"]
    user = db.user_collection.find_one({"_id": uid})
    data = []
    for friend_id in user["friends"]:
        friend = db.user_collection.find_one({"_id": friend_id})
        friend["_id"] = str(friend["_id"])
        # hard-coded embed uri for now
        friend["spotify_uri"] = "spotify:track:4qDHt2ClApBBzDAvhNGWFd"
        data.append(friend)
    return jsonify(data)

# Tomorrow: authentication, spotify tokens, get live tracks from spotify, calculate similarities, deployment
@app.route("/spotify-callback")
def spotify_callback():
    print(request.args)
    return request.args["code"]

# API to retrieve all users in DB
@app.route("/getUsers", methods=["POST"])
def getAll():
    all_users = db.user_collection.find()

    return json_util.dumps(all_users), {"Access-Control-Allow-Origin": "http://localhost:3000/"}

if __name__ == '__main__':
    app.run(port=8000)