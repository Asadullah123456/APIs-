const express = require('express');
const router = express.Router();
const invoiceController =require('../controller/invoiceController');

router.post('/invoice',invoiceController.createInvoice);

router.get('/invoice',invoiceController.getAllInvoices);

router.delete('/invoice/:id',invoiceController.deleteInvoice);

router.put('/invoice/:id',invoiceController.updateInvoice);

module.exports=router;