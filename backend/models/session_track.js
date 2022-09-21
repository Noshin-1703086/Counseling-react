const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const session_trackSchema = new mongoose.Schema({
      created_by:{
        type:mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
        },
        date: {
            type: String,
            required : true,
        },
        prev_wellbeing:{
            type: Number,
            min:0,
            max:100,
            required : true,
        },
        post_wellbeing:{
            type: Number,
            min:0,
            max:100,
            required : true,
        },
        motivation:{
            type: Number,
            min:0,
            max:100,
            required : true,
        },
        prev_homework:{
            type: String,
            enum: ['Done','Not Done'],
            required : true,
        },
        summary:{
            type: String,
            required : false,
        },
        new_homework:{
            type: String,
            required : false,
        },
        agenda:{
            type: String,
            required : false,
        },
});

const Session_trackInfo = mongoose.model("session_track",session_trackSchema);

module.exports = {Session_trackInfo};