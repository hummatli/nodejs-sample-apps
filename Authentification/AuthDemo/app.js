var express     = require("express"),
    mongoose    = require("mongoose"),
    app = express()


mongoose.connect("mongodb://localhost/auth_demo_app" , { useMongoClient: true })
mongoose.Promise = global.Promise

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("home")
})

app.get("/secret", function(req, res) {
    res.render("secret")
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("AuthDemo is listening...")
})