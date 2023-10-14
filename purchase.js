const mongoose= require('mongoose')

const purchaseScheme =mongoose.Schema({
    id:Number,
    purchasedBy:String,
    purchaseOn:Date,
    productid:Number,
}, {timestamps:true});
module.exports=mongoose.model('Purchase',purchaseScheme);