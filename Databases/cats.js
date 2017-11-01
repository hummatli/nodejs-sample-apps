var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/cat_app" , { useMongoClient: true })
mongoose.Promise = global.Promise

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

var Cat = mongoose.model("Cat", catSchema)

var george = new Cat({
    name: "George1",
    age: 12,
    temperament: "Grouchy1"
})

george.save(function(err, cat) {
    if(err) {
        console.log("SOMETHING WENT WRONG")
    } else {
        console.log("WE SAVED CAT:")
        console.log(cat)
    }
})

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if(err) {
        console.log("SOMETHING WENT WRONG")
    } else {
        console.log("WE SAVED CAT:")
        console.log(cat)
    }
})

Cat.find({}, function(err, cats) {
    if(err) {
        console.log("Error: ")
        console.log(err)
    } else {
        console.log("All Cats:")
        console.log(cats)
    }
})