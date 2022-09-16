const jwt = require("jsonwebtoken");
const router = require("express").Router();
const dotenv = require('dotenv')
const {User} = require('../models/user');
const {PaymentInfo} = require('../models/payment');
dotenv.config()

router.get("/",async(req,res) => {
    const token = req.query.token;
    const username=jwt.decode(token);
    const user = await User.findOne({username:username.user});
    const user2 = await PaymentInfo.findOne({_id:user});
    if(user2 && user2.confirmation==true)
    {
        res.send(true);
    }
    else
    {
        res.send(false);
    }     
    });
module.exports = router;