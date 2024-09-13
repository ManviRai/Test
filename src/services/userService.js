const userQuery = require('../queries/userQuery');

const saveUser = async (userDetails) =>{
    try {
        const user = await userQuery.saveUser(userDetails);
        return user


    } catch (error) {
        throw error
}
}
const viewUser = async()=>{
    try {
        const viewData = await userQuery.viewUser();
        return viewData;
    } catch (error) {
     throw error;   
    }
}

const updateUser = async(body,id)=>{
    try {
        const updateData = await userQuery.updateUser(body,id);
        return updateData;
    } catch (error) {
        throw error
    }
}

const deleteUser = async(id)=>{
    try {
        const deletedData = await userQuery.deleteUser(id);
        return deletedData;
    } catch (error) {
        throw error
    }
}



module.exports = {
    saveUser,
    viewUser,
    updateUser,
    deleteUser
}