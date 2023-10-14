const express = require('express');
const router = express.Router();
const purchaseController =require('../controller/purchaseController');

router.post('/purchase',purchaseController.createPurchase);

router.get('/purchase',purchaseController.getAllPurchase);

router.delete('/purchase/:id',purchaseController.deletePurchase);

router.put('/purchase/:id',purchaseController.updatePurchase);

module.exports=router;