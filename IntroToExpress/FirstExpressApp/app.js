var express = require("express")
var app = express()

app.get("/", function(req, res) {
    res.send("Hi there!")
})

app.get("/bye", function(req, res) {
    res.send("Goodbye")
})

app.get("/dog", function(req, res) {
    res.send("MEOW")
})

app.get("/s/ss", function(req, res) {
    res.send("Inside SS")
})


app.get("/r/somePath", function(req, res) {
    res.send("Inside subPath no paramter")
})

app.get("/r/:subPath", function(req, res) {
    var subPath = req.params.subPath
    res.send("Inside subPath. Param is: " + subPath)
})

app.get("/r/:subPath/comments/:id/:title", function(req, res) {
    res.send("Welcome comments page")
})

app.get("*", function(req, res) {
    res.send("You are a star!!!")
})


//In our own com we write 
//app.listen(<port>, <callback>)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!!")
})