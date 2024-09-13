const userController = require('../controllers/userController');
const express = require('express');
const userRouter = express.Router();

userRouter.post("/user-register",userController.saveUser);
userRouter.get("/view-user",userController.viewUser);
userRouter.put("/update-user/:id",userController.updateUser);
userRouter.delete("/delete-user/:id",userController.deleteUser);


module.exports = userRouter;