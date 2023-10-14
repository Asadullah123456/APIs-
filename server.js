const bodyParser = require('body-parser');
const express =require('express')
const app = express();
const productRouter= require('./routes/productRoutes')
const invoiceRouter= require('./routes/invoiceRoutes')
const purchaseRouter= require('./routes/purchaseRoutes')
const bodyparser=require('body-parser');
require('./utils/db')


const PORT= 3005;

app.use(bodyparser.json());
app.use('/api',productRouter);
app.use('/api',invoiceRouter);
app.use('/api',purchaseRouter);
app.get('/welcome' ,(req,res)=>{
    res.send("welcome BATMAN ")
})
app.listen(PORT,()=>{
    console.log("server is running on the port".PORT);
})