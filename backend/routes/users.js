const express = require('express');
const router = express.Router();
const {User,validate} = require('../models/user');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv')
dotenv.config()

router.post('/',async(req,res) => {
    try {
        const{error} = validate(req.body);
        if(error)
           return res.status(400).send({message: error.details[0].message});

        const user = await User.findOne({email:req.body.email});
        const user2 = await User.findOne({username:req.body.username});
        if(user)
           return res.status(409).send({message: "User with given email already exist!"});
        if(user2)
           return res.status(410).send({message: "User with given username already exist!"});
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        await new User({...req.body,password:hashPassword}).save();
        res.status(201).send({message:"User created successfully"});     
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
    }
})

module.exports = router;