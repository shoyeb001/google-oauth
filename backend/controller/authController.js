const { default: axios } = require("axios");
const { oauth2Client } = require("../utils/googleConfig");
const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken")

const googleLogin = async(req, res)=>{
    try {
        const {code} = req.query;
        console.log(code, "code")
        const googleRes = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(googleRes?.tokens);
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`);
        console.log(userRes);
        const {email, name, picture} = userRes?.data;
        let user = await UserModel.findOne({email:email});
        if(!user){
            console.log("New user found");
            user = await UserModel.create({
                name:name,
                email,
                image:picture
            })
        }
        return res.status(200).json({
            user:user,
            message:"User logged In"
        })
    } catch (error) {
        console.log(error,"error")
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
}
module.exports = {
    googleLogin
}