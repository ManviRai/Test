const userService=require('../services/user_services');

const postUser=async(req,res)=>{
    try{
       const postResult=await userService.postUser(req.body);
       res.status(200).send(postResult);
    }
    catch(error){
        res.status(500).send('error')
    }
}


const getUser=async(req,res)=>{
    try{
    const getResult=await userService.getUser();
    return res.status(200).send(getResult);
    }
    catch(error){
        return res.status(500).send('error');
    }
}

const updateUser=async(req,res)=>{
    try{
    const id=req.params.id;
    const updateResult=await userService.updateUser(id,req.body);
    res.status(200).send(updateResult);
    }
    catch(error){
        res.status(500).send('error');
    }
}

const deleteUser=async(req,res)=>{
    try{
       const id=req.params.id;
       const deleteResult=await userService.deleteUser(id);
       res.status(200).send(deleteResult);
    }
    catch(error){
        res.status(500).send('error')
    }
}

module.exports={
    postUser,getUser,updateUser,deleteUser
}