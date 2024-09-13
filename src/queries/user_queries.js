const {data}=require('../models/user_models');

const postUser=async(body)=>{
    try{
     const postuser=await new data(body).save();
     return postuser;
    }
    catch(error){
        throw error;
    }
}

const getUser=async()=>{
    try{
       const getuser=await data.find();
       return getuser;
    }
    catch(error){
        throw error;
    }
}

const updateUser=async(id,updated)=>{
    try{
       const updateuser=await data.findByIdAndUpdate(id,updated);
       return updateuser;
    }
    catch(error){
        throw error;
    }
}

const deleteUser=async(id)=>{
    try{
       const deleteuser=await data.findByIdAndDelete(id);
       return deleteuser;
    }
    catch(error){
        throw error;
    }
}

module.exports={
    postUser,getUser,updateUser,deleteUser
}