#!/usr/bin/env python
import os
import time

import boto3
import requests
from models import data_manager
from flask import Flask, jsonify, request
from flasgger import Swagger


# Registered Services
# sources_url = {
#     "stackoverflow": "http://so-parser-backend:9091",
#     "reddit": "http://reddit-parser-backend:9090",
#     "codeproject": "http://codeproject-parser-backend:9095"
# }

# set app & swagger
# /apidocs
app = Flask(__name__)
app.config['SWAGGER'] = {
    "title": "Image Processor",
    "description": "Hi:))) just a website showcasing some basic image processing",
    "version": "1.0",
    "termsOfService": "",
    "hide_top_bar": True
}
swagger = Swagger(app=app, template_file="swagger_doc.yml")


# TESTER~
@app.route('/', methods=['GET'])
def test():
    s3_client = boto3.client(
        "s3",
        region_name='us-east-2')
    bucket_name = 'anchi-imgprocessor'
    object_key = 'uploads/images/test.png'

    img_path = 'test_data/test.png'

    try:
        s3_client.upload_file(img_path, bucket_name, object_key)
        return "Success"
    except Exception as e:
        print(e.__cause__)
        return "Failed"


if __name__ == "__main__":
    print("Welcome to My Image Processor ~~")
    app.run(host='0.0.0.0', port=os.environ.get("FLASK_SERVER_PORT", 8000), debug=True)
