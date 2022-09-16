const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const confirmSchema = new mongoose.Schema({
      _id:{
        type:mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
        },
        type: {
            type: String,
            required : true,
        },
        therapist: {
            type: String,
            required : true,
        },
        date: {
            type: String,
            required : true,
        },
        time: {
            type: String,
            enum: ['10:00 am','11:00 am','5:00 pm','7:00 pm'],
            required : true,
        },
        link: {
            type: String,
            default:"Not assigned",
            required : true,
        },

});

const ConfirmInfo = mongoose.model("confirm_book",confirmSchema);

module.exports = {ConfirmInfo};