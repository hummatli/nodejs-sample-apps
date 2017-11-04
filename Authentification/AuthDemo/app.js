var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStartegy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose")

mongoose.connect("mongodb://localhost/auth_demo_app" , { useMongoClient: true }, function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log("CONNECTED TO DB")
    }
})
mongoose.Promise = global.Promise

var app = express()
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//=============
//ROUTES
//=============
app.get("/", function(req, res) {
    res.render("home")
})

app.get("/secret", function(req, res) {
    res.render("secret")
})

//Auth Routes

//show sign up form
app.get("/register", function(req, res) {
    res.render("register")
})
//handling user sign up
app.post("/register", function(req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    console.log("registered")
        if(err) {
            console.log(err)
            return res.render("register")
        }
        passport.authenticate("local")(req, res, function() {
            console.log("authenticated")
            res.redirect("/secret")
        }) 
    })
    
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("AuthDemo is listening...")
})