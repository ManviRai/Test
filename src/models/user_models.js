const mongo=require('mongoose');
const Schema=new mongo.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const data=mongo.model('userData',Schema);
module.exports={
    data
}