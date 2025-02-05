import boto3

s3_client = boto3.client(
    "s3",
    aws_access_key_id='AKIAXAJL2R7RV7FHSIM4',
    aws_secret_access_key='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',
    region_name='us-east-2'
)
bucket_name = 'anchi-imgprocessor'
object_key = 'uploads/images/test.png'

img_path = 'test_data/test.png'

try:
    s3_client.upload_file(img_path, bucket_name, object_key)
    print("Yeah!!")
except Exception as e:
    print(e.__cause__)