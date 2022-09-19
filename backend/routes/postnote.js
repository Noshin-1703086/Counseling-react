const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const {NoteInfo} = require('../models/note_model');
const dotenv = require('dotenv')
dotenv.config()

router.post('/',async(req,res) => {
    try {
        const username=jwt.decode(req.body.params.token);
        const user = await User.findOne({username:username.user});
        const user2 = await NoteInfo.findOne({created_by:user,date:req.body.params.data.date});
        if(user2)
        {
            await NoteInfo.deleteOne({_id:user2});

        }
        req.body.params.data.created_by=user;
        await new NoteInfo({...req.body.params.data}).save();
        console.log("Created")
        res.status(201).send({message:"UserInfo created successfully"});     
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})

module.exports = router;