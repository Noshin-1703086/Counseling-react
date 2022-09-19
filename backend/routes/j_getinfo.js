const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const {JournalInfo} = require('../models/journal_model');
const dotenv = require('dotenv')
dotenv.config()

router.get('/',async(req,res) => {
    try {
        const username=jwt.decode(req.query.token);
        const user = await User.findOne({username:username.user});
        const user2 = await JournalInfo.findOne({created_by:user,date:req.query.date});
        if(user2)
        {
            res.send(user2.text)
        }
        else
        {
            res.send("")
        }
          
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})

module.exports = router;