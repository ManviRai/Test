const mongo=require('mongoose');
const valid=mongo.connect(process.env.MONGO);
if(valid){
    console.log("mongodb connected");   
}