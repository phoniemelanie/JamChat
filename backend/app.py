from flask import Flask, jsonify, request
import db
from bson import ObjectId

app = Flask(__name__)

@app.route("/")
def app():
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
    

# API to retrieve all users in DB
@app.route("/getUsers", methods=["POST"])
def getAll():
    all_users = db.user_collection.find()
    data = []

    for user in all_users:
        # Making it into a string avoids this TypeError: Object of type ObjectId is not JSON serializable
        user['_id'] = str(user['_id']) 
        data.append(user)

    return jsonify(data)

if __name__ == '__main__':
    app.run(port=8000)