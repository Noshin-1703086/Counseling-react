const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const dotenv = require('dotenv')
dotenv.config()

router.get('/',async(req,res) => {
    try {
        const username=jwt.decode(req.query.token);
        const user = await User.findOne({username:username.user});
        res.send(user._id.valueOf())
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})
module.exports = router;