const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Adarsh:singh9540@cluster0.yju1yru.mongodb.net/paytm");

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
})


const User = mongoose.model("User",userSchema)

module.exports ={
    User
}