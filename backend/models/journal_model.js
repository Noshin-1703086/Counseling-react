const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const journalSchema = new mongoose.Schema({
      created_by:{
        type:mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
        },
        date: {
            type: String,
            required : true,
        },
        text: {
            type: String,
            required : true,
        },
});

const JournalInfo = mongoose.model("journal",journalSchema);

module.exports = {JournalInfo};