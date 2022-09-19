const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const {UserInfo} = require('../models/user_info');
const dotenv = require('dotenv')
dotenv.config()

router.get('/',async(req,res) => {
    try {
        const username=jwt.decode(req.query.token);
        console.log(username.user);
        const user = await User.findOne({username:username.user});
        const user2 = await UserInfo.findOne({_id:user});
        res.send(user2);     
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})

module.exports = router;