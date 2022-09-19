const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const noteSchema = new mongoose.Schema({
      created_by:{
        type:mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
        },
        date: {
            type: String,
            required : true,
        },
        title: {
            type: String,
            required : true,
        },
        text: {
            type: String,
            required : true,
        },
});

const NoteInfo = mongoose.model("note",noteSchema);

module.exports = {NoteInfo};