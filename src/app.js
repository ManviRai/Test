const express=require('express');
const bodyParser=require('body-parser');
require('dotenv').config({path:'../config/dot.env'})
require('./db/mogoose')
const {router}=require('./routers/user_router')



const app=express();
app.use(bodyParser.json());
app.use(router);



port=4040
app.listen(port,()=>{
    console.log(`server running in port ${port} `)
});