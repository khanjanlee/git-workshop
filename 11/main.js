const express = require("express");
const path = require("path");
var fileupload = require("express-fileupload");
const fs = require('fs')

app = express();
app.use(fileupload());
app.use(express.urlencoded({
    extended: true
  }))
files = ["hello.jpg"]

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/upload.html"));
});

app.post("/upload", function (req, res) {
  f = req.files.upload1;
  var fileName = f.name;

  f.mv(__dirname + "/uploads/" + fileName , function (err) {
    if (err) {
      console.log(err);
      res.send("upload error");
    } else {
        files.push(fileName)
      res.send(`uploaded , id: ${files.indexOf(fileName)} `);
      
    }
  });
});



app.delete("/delete-file",(req,res)=>{
        try {
            fs.unlinkSync(__dirname + "/uploads/"+files[req.query.id])
            res.send("success")
          } catch(err) {
            console.error(err)
            res.send(error)
          }
})

app.post("/rename-file",(req,res)=>{
    try{
        fs.rename(__dirname + "/uploads/"+ files[req.body.id] , __dirname + "/uploads/"+ req.body.newName ,(err)=>{console.log(err)})
        res.send("success")
    }
    catch (err){
        console.log(err)
    }
})
app.listen(3000);
