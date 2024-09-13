const express=require('express');
const router=express.Router();
const userController=require('../controllers/user_controllers');

router.post('/post-user',userController.postUser);
router.get('/get-users',userController.getUser);
router.put('/update-user/:id',userController.updateUser);
router.delete('/del-user/:id',userController.deleteUser);

module.exports={
    router
}
