const userService =  require('../services/userService');

const saveUser = async (req,res)=>{
    try {
        const savedUser = await userService.saveUser(req.body);
        return res.status(200).send(savedUser);
    } catch (error) {
       
        console.log(error);
        return res.status(500).send("error");
        
    }
}

const viewUser = async (req,res)=>{
    try {
        const userData = await userService.viewUser();
        return res.status(200).send(userData);
    } catch (error) {
        return res.status(500).send("error")
    }
}

const updateUser = async (req,res)=>{
    try {
        const updatedUser = await userService.updateUser(req.body,req.params.id);
        return res.status(200).send(updatedUser);
    } catch (error) {
        return res.status(500).send("error")
    }
}

const deleteUser = async (req,res)=>{
    try {

        const deletedUser = await userService.deleteUser(req.params.id);
        return res.status(200).send(deletedUser);
    } catch (error) {
        return res.status(500).send("error")
    }
}



module.exports = {
    saveUser,
    viewUser,
    updateUser,
    deleteUser
}