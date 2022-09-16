const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const {UserInfo} = require('../models/user_info');
const {ConfirmInfo} = require('../models/confirm_book');
const dotenv = require('dotenv')
dotenv.config()

router.post('/',async(req,res) => {
    try {
        const username=jwt.decode(req.body.params.token);
        const user = await User.findOne({username:username.user});
        req.body.params.data._id=user;
        req.body.params.data.type=req.body.params.type;
        const user2 = await UserInfo.findOne({_id:user});
        req.body.params.data.therapist=user2.therapist;
        console.log(req.body.params.data)
        await new ConfirmInfo({...req.body.params.data}).save();
        console.log("Created")
        res.status(201).send({message:"UserInfo created successfully"});     
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})

module.exports = router;