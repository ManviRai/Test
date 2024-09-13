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