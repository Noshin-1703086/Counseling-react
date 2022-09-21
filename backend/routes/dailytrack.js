const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const {Daily_trackInfo} = require('../models/daily_track');
const dotenv = require('dotenv')
dotenv.config()

router.post('/',async(req,res) => {
    try {
        const username=jwt.decode(req.body.params.token);
        const user = await User.findOne({username:username.user});
        const user2 = await Daily_trackInfo.findOne({created_by:user,date:req.body.params.data.date});
        if(user2)
        {
            await Daily_trackInfo.deleteOne({_id:user2});

        }
        req.body.params.data.created_by=user;
        await new Daily_trackInfo({...req.body.params.data}).save();
        console.log("Created")
        res.status(201).send({message:"UserInfo created successfully"});     
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})

module.exports = router;