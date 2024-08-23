const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type: String
    },
    image:{
        type:String
    },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;