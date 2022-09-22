const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const contactSchema = new mongoose.Schema({
        name: {
            type: String,
            required : true,
        },
        email: {
            type: String,
            required : true,
            },
        message: {
            type: String,
            required : true,
        },
},{ timestamps: true });

const ContactInfo = mongoose.model("contact",contactSchema);

module.exports = {ContactInfo};