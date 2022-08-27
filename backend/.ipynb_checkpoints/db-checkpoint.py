from flask import Flask
from flask_pymongo import pymongo

CONNECTION_STRING = "mongodb+srv://backend:s0K1zGu636ZhZrxO@cluster0.qmj9j.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(CONNECTION_STRING)

# This will either find this database if it already exists, or create one
db = client.get_database('jamchat')

# This will create a collection named 'collection' within the above database
user_collection = pymongo.collection.Collection(db, 'users')
