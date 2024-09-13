<<<<<<< HEAD
const express=require('express');
const bodyParser=require('body-parser');
require('dotenv').config({path:'./config/dot.env'})
require('./db/mogoose')
const {router}=require('./routers/user_router')



const app=express();
app.use(bodyParser.json());
app.use(router);



port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server running in port ${port} `)
});
=======
const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter')
require("dotenv").config({ path: "./config/dev.env"});
require("./db/mongoose");

app.use(bodyParser.json());
app.use(userRouter);


const port = process.env.PORT;

app.listen(port , ()=>{
    console.log("server is running on port 4040")
})
>>>>>>> origin/sadhan
