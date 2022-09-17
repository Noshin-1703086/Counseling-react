const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const {ConfirmInfo} = require('../models/confirm_book');
const dotenv = require('dotenv')
dotenv.config()

router.get('/',async(req,res) => {
    try {
        const username=jwt.decode(req.query.token);
        const user = await User.findOne({username:username.user});
        const user2 = await ConfirmInfo.findOne({_id:user});
        if(user2)
        {
            res.send(user2);
        }
        else
        {
            res.send(false);
        }      
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})

module.exports = router;