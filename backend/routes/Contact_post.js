const express = require('express');
const router = express.Router();
const {ContactInfo} = require('../models/contact_model');
const dotenv = require('dotenv')
dotenv.config()

router.post('/',async(req,res) => {
    try {
        await new ContactInfo({...req.body}).save();
        console.log("Created")
        res.status(201).send({message:"UserInfo created successfully"});     
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log("Error")
    }
})

module.exports = router;