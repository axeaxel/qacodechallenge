# This code sample uses the 'requests' library:
# http://docs.python-requests.org
import requests
import json

url = "https://api.trello.com/1/cards"

headers = {
   "Accept": "application/json"
}

query = {
   'name': 'testcard',
   'idList': '5abbe4b7ddc1b351ef961414',
   'key': 'ac10b3cd54ccfe87040dcc4b63de7c44',
   'token': 'b1982e105d221dd7929ff0277b16c0d5e74645237251d0ed7c08ebcd282ab633'
}

response = requests.request(
   "POST",
   url,
   headers=headers,
   params=query
)

print(response.text)
