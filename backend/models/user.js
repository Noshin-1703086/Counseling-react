const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const dotenv = require('dotenv')
dotenv.config()

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({user:this.username}, process.env.JWTPRIVATEKEY,{expiresIn:"7d",});
    return token;
};

const User = mongoose.model("user",userSchema);
const validate = (data) => {
    const schema = Joi.object({
        username:Joi.string().required().label('Username'),
        email:Joi.string().email().required().label('Email'),
        password:passwordComplexity().required().label('Password'),
        repeat_password:Joi.any().equal(Joi.ref('password')).required()
        .label('Confirm password').options({ messages: { 'any.only': 'Passwords does not match'} })
    });
    return schema.validate(data);
};

module.exports = {User,validate};