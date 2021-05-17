import requests


#print(requests.post("http://localhost:3000/rename-file",data={"id":1, "newName":"hello.jpg"}).text)


print(requests.delete("http://localhost:3000/delete-file?id=0").text)
