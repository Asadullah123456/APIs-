const Purchase= require('../models/purchase')
async function createPurchase(req,res){
    try{
        const newPurchase= await Purchase.create(req.body);
        res.status(201).json(newPurchase);
    }
    catch(error)
    {
        res.status(500).json({error:error})
    }
}
async function updatePurchase(req,res){
    try{
        const { id }= req.params;
        const updatedPurchase = await Purchase.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updatedPurchase);
    }
    catch(error)
    {
        res.status(500).json({error:error});
    }
}
async function getAllPurchase(req,res){
    try {
        const purchases= await Purchase.find();
        res.status(201).json(purchases);
    } catch (error) {
        res.status(500).json({error:error});
    }
}
async function deletePurchase(req,res){
    try {
        const { id }= req.params;
        await Purchase.findByIdAndRemove(id,req.body,{new:true});
        res.sendstatus(204);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
module.exports={
    createPurchase,
    deletePurchase,
    updatePurchase,
    getAllPurchase,
};