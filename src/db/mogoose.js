const mongo=require('mongoose');
const valid=mongo.connect("mongodb+srv://simanchala:xA6vsgeVUpGbFW0Y@cluster0.horp5xz.mongodb.net/temp?retryWrites=true&w=majority&appName=Cluster0");
if(valid){
    console.log("mongodb connected");   
}