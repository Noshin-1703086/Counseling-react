const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const paymentInfoSchema = new mongoose.Schema({
      _id:{
        type:mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
        },
        bkash_no: {
            type: String,
            required : true,
        },
        transaction_no: {
            type: String,
            required : true,
        },
        confirmation: {
            type: Boolean,
            required : true,
            default: false,
        },

});

const PaymentInfo = mongoose.model("payment",paymentInfoSchema);

module.exports = {PaymentInfo};