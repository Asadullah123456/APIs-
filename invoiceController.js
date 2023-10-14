const Invoice=require('../models/invoice')
async function createInvoice(req,res){
    try{
        const newinvoice= await Invoice.create(req.body);
        res.status(201).json(newinvoice);
    }
    catch(error)
    {
        res.status(500).json({error:error})
    }
}
async function updateInvoice(req,res){
    try{
        const { id }= req.params;
        const updatedinvoice = await Invoice.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updatedinvoice);
    }
    catch(error)
    {
        res.status(500).json({error:error});
    }
}
async function getAllInvoices(req,res){
    try {
        const invocies= await Product.find();
        res.status(201).json(invocies);
    } catch (error) {
        res.status(500).json({error:error});
    }
}
async function deleteInvoice(req,res){
    try {
        const { id }= req.params;
        await Invoice.findByIdAndRemove(id,req.body,{new:true});
        res.sendstatus(204);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
module.exports={
    createInvoice,
    deleteInvoice,
    getAllInvoices,
    updateInvoice,
};