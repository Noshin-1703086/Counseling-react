const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const daily_trackSchema = new mongoose.Schema({
      created_by:{
        type:mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
        },
        date: {
            type: String,
            required : true,
        },
        mood:{
            type: Number,
            min:0,
            max:100,
            required : true,
        },
        neg_thought_manage:{
            type: Number,
            min:0,
            max:100,
            required : true,
        },
        therapy_practice:{
            type: Number,
            min:0,
            max:100,
            required : true,
        },
        suicidal_thought:{
            type: Number,
            min:0,
            max:100,
            required : true,
        },
        suicidal_ideation:{
            type: Number,
            min:0,
            max:100,
            required : true,
        },
        homework:{
            type: String,
            enum: ['Yes','No'],
            required : true,
        },
        relaxation:{
            type: String,
            enum: ['Yes','No'],
            required : true,
        },
        appetite:{
            type: String,
            enum: ['Yes','No'],
            required : true,
        },
        sleep:{
            type: String,
            enum: ['Yes','No'],
            required : true,
        },
        psychotherapy:{
            type: String,
            enum: ['Yes','No'],
            required : true,
        },
        psychiatrist:{
            type: String,
            enum: ['Yes','No'],
            required : true,
        },
        medication:{
            type: String,
            enum: ['Yes','No'],
            required : true,
        },
});

const Daily_trackInfo = mongoose.model("daily_track",daily_trackSchema);

module.exports = {Daily_trackInfo};