const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const {JournalInfo} = require('../models/journal_model');
const dotenv = require('dotenv')
dotenv.config()

router.post('/',async(req,res) => {
    try {
        const username=jwt.decode(req.body.params.token);
        const user = await User.findOne({username:username.user});
        const user2 = await JournalInfo.findOne({created_by:user,date:req.body.params.data.date});
        if(user2)
        {
            await JournalInfo.deleteOne({_id:user2});

        }
        req.body.params.data.created_by=user;
        await new JournalInfo({...req.body.params.data}).save();
        console.log("Created")
        res.status(201).send({message:"UserInfo created successfully"});     
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})

module.exports = router;