const Product= require('../models/product')
async function createProduct(req,res){
    try{
        const newproduct= await Product.create(req.body);
        res.status(201).json(newproduct);
    }
    catch(error)
    {
        res.status(500).json({error:error})
    }
}
async function updateProduct(req,res){
    try{
        const { id }= req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updatedProduct);
    }
    catch(error)
    {
        res.status(500).json({error:error});
    }
}
async function getAllProducts(req,res){
    try {
        const products= await Product.find();
        res.status(201).json(products);
    } catch (error) {
        res.status(500).json({error:error});
    }
}
async function deleteProduct(req,res){
    try {
        const { id }= req.params;
        await Product.findByIdAndRemove(id,req.body,{new:true});
        res.sendstatus(204);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
module.exports={
    createProduct,
    updateProduct,
    getAllProducts,
    deleteProduct,
};