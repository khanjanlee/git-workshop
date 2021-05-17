import requests

a = requests.get("http://localhost:3000/validate",headers={"Bearer Token":input("enter Token")})

print(a.text)