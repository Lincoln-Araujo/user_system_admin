const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.listAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;