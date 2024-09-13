const {userModel} =  require('../models/user_models');

const saveUser = async (userDetails)=>{
    try {
        const savedUser = await userModel(userDetails).save();
        return savedUser;
    } catch (error) {
        throw error;
    }
};



const viewUser = async ()=>{
    try {
        const viewData = await userModel.find();
        return viewData;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (userDetails, id)=>{
    try {
        const {username, email , password} = userDetails;
        const savedUser = await userModel.findByIdAndUpdate(id,{$set:{username,email,password}});
        return savedUser;
    } catch (error) {
        throw error;
    }
};

const deleteUser= async (id)=>{
    try {
        const deletedUser = await userModel.findByIdAndDelete(id);
        return deletedUser;
    } catch (error) {
        throw error;
    }
};




module.exports = {
    saveUser,
    viewUser,
    updateUser,
    deleteUser
}