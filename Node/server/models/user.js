const mongoose = require("mongoose");
const schema = mongoose.Schema;


const userSchema = new schema({

    name: {

        type: String, 
        required: true,  
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

   

    age: {

        type: Number,
        required: true,
    }
    




});  


const User = mongoose.model("User", userSchema);

module.exports = User;