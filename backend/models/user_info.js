const mongoose = require('mongoose');
const { User } = require("../models/user");
const dotenv = require('dotenv')
dotenv.config()

const userInfoSchema = new mongoose.Schema({
      _id:{
        type:mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
        },
        name: {
            type:String,
            required:true
        },
        gender: {
            type: String,
            enum: ['Male', 'Female'],
            required : true 
        },
        economic_status: {
            type: String,
            enum: ['Lower Class', 'Lower Middle Class','Upper Middle Class','Upper'],
            required : true 
        },
        age: {
            type: Number,
            required : true,
            min:1,
            max:100,
        },
        blood_group: {
            type: String,
            enum: ['A+','A-','B+','B-','O+','O-','AB+','AB-'],
            required : true,
        },
        marital_status: {
            type: String,
            enum: ['Married','Unmarried'],
            required : true,

        },
        location: {
            type: String,
            required : true,
        },
        occupation: {
            type: String,
            required : true,
        },
        contact: {
            type: String,
            required : true,
        },
        contact2: {
            type: String,
            required : true,
        },
        date_of_birth: {
            type: String,
            required : true,
        },
        illness: {
            type: String,
            required : true,

        },
        problem: {
            type: String,
            required : true,
            
        },
        service_type:{
            type: String,
            enum: ['Individual','Couples','Family'],
            required : true,
        }
});

const UserInfo = mongoose.model("user_info",userInfoSchema);

module.exports = {UserInfo};