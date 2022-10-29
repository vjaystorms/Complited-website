const express= require("express");
const bodyParser=require("body-parser")
const app=express();
const path = require('path');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req, res) {
res.sendFile(path.join(__dirname,"/index.html"))
});




app.listen(3000,function(){
  console.log("Port 3000 up and running")
})
