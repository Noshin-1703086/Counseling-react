const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const {UserInfo} = require('../models/user_info');
const {PaymentInfo} = require('../models/payment');
const dotenv = require('dotenv')
dotenv.config()

router.post('/',async(req,res) => {
    try {
        const username=jwt.decode(req.body.params.token);
        const user = await User.findOne({username:username.user});
        const user2 = await UserInfo.findOne({_id:user});
        const user3 = await PaymentInfo.findOne({created_by:user,r_type:user2.service_type});
        if(user3)
        {
           await PaymentInfo.deleteOne({_id:user3});
        }
        req.body.params.data.created_by=user;
        req.body.params.data.r_type=user2.service_type;
        await new PaymentInfo({...req.body.params.data}).save();
        console.log("Created")
        res.status(201).send({message:"UserInfo created successfully"});     
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})

module.exports = router;