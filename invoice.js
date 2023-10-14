const mongoose= require('mongoose')

const invoiceScheme = mongoose.Schema({
    id: Number,
    CostumerName: String,
    price :Number,
    taxAmount:Number
}, {timestamps:true});
module.exports=mongoose.model('Invoice',invoiceScheme);