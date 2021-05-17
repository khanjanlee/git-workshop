const express = require('express');
const jwt= require('njwt');

var PRIVATEKEY = "JUSTADEMOKEY"
var app = express()
app.use(
    express.urlencoded({
      extended: true
    })
  )

  users = {}


app.get('/create-user',function(req,res){
    var username = req.query.username
        var password = req.query.password
        if (username == undefined | password== undefined){
            res.send({"error":"wrong input or empty input"})
            return
        }
    users[username] = password
    res.send({"success":`user  ${username} created`})
})


app.get('/login-user', function (req, res) {
    try{
        var username = req.query.username
        var password = req.query.password
        if (username == undefined | password== undefined){
            res.send({"error":"wrong input or empty input"})
            return
        }
        try{
            if (users[username]==password){
                var jtoken = jwt.create({"username":username,"password":password},PRIVATEKEY).compact()
                res.send({"token":jtoken})
            }
            else {
                res.send({"error":"wrong username or password"})
            }
        }
        catch {
            res.send({"error":"user not exists"})
        }
        
    }
    catch {
        res.send({"error":"server issues"})
    }
  })

app.get("/validate",function(req,res){
    var token = req.header('Bearer Token')
    if (token==undefined){
        res.send({'error':"please enter token"})
    }
    jwt.verify(token,PRIVATEKEY,(err,token)=>{
        if (err){
            res.send({"verified":"False"})
        }
        else {
            res.send({"verified":"True"})
        }
    })
})


app.listen(3000)