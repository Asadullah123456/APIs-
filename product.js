const mongoose= require('mongoose')

const productScheme =mongoose.Schema({
    id:Number,
    title: String,
    disc: String,
    price :Number
}, {timestamps:true});
module.exports=mongoose.model('Product',productScheme);