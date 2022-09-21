const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const {Daily_trackInfo} = require('../models/daily_track');
const dotenv = require('dotenv')
dotenv.config()

router.get('/',async(req,res) => {
    try {
        const username=jwt.decode(req.query.token);
        const user = await User.findOne({username:username.user});
        const user2 = await Daily_trackInfo.findOne({created_by:user,date:req.query.date});
        console.log(user)
        console.log(req.query.date)
        console.log(user2);
        if(user2)
        {
            res.send(user2)
        }
        else
        {
            res.send(false)
        }
          
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})

module.exports = router;