const userQuery=require('../queries/user_queries');

const postUser=async(body)=>{
    try{
      const postuser=body;
      const postRes=await userQuery.postUser(postuser);
      return postRes;
    }
    catch(error){
        throw error;
    }
}

const getUser=async()=>{
    try{
      const getuser=await userQuery.getUser();
      return getuser;
    }
    catch(error){
        throw error;
    }
}

const updateUser=async(id,body)=>{
   try{
      const updateuser=body;
      const updateRes=await userQuery.updateUser(id,updateuser);
      return updateRes;
   }
   catch(error){
    throw error;
   }
}

const deleteUser=async(id)=>{
    try{
       const deleteuser=await userQuery.deleteUser(id);
       return deleteuser;
    }
    catch(error){
        throw error;
    }
}

module.exports={
    postUser,getUser,updateUser,deleteUser
}