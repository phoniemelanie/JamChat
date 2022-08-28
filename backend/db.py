from flask import Flask
from flask_pymongo import pymongo
import config
import secrets

CONNECTION_STRING = config.mongo_url.format(username=config.mongo_username, password=secrets.mongodb_password)

client = pymongo.MongoClient(CONNECTION_STRING)

# This will either find this database if it alreadyn  exists, or create one
db = client.get_database('jamchat')

# This will create a collection named 'collection' within the above database
user_collection = pymongo.collection.Collection(db, 'users')
