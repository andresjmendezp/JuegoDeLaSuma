var express = require("express");
var app = express();

const path=require("path");

app.use(express.static("archivos"))
app.get("/",(req,res) => {
//console.log("juego de la suma")
res.sendFile(path.join(__dirname,"/JuegoDelaSuma.html"));
});


app.listen(8989);
