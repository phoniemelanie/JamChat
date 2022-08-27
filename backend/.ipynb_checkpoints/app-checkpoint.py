from flask import Flask, jsonify, request
import db
from bson import ObjectId

app = Flask(__name__)

# API to retrieve all recipes in DB
@app.route("/getUsers", methods=["POST"])
def getAll():
    all_docs = db.user_collection.find()
    data = []

    for doc in all_docs:
        # Making it into a string avoids this TypeError: Object of type ObjectId is not JSON serializable
        doc['_id'] = str(doc['_id']) 
        data.append(doc)

    return jsonify(data)

if __name__ == '__main__':
    app.run(port=8000)