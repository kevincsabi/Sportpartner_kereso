const express = require('express');
const userController = require('../Controller/usercontroller'); 
const router = express.Router();

router.post('/users', userController.createUser);


router.get('/users', userController.getAllUsers);


router.get('/users/:id', userController.getUserById);

// Route for updating a user
router.put('/users/:id', userController.updateUser);

// Route for deleting a user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
