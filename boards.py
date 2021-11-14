# This code sample uses the 'requests' library:
# http://docs.python-requests.org
import requests

url = "https://api.trello.com/1/boards/"

query = {
   'name': 'board',
   'key': 'ac10b3cd54ccfe87040dcc4b63de7c44',
   'token': 'b1982e105d221dd7929ff0277b16c0d5e74645237251d0ed7c08ebcd282ab633'
}

response = requests.request(
   "POST",
   url,
   params=query
)

print(response.text)
