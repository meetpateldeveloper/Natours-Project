const userController = require('./../controllers/userController')

// Importing 3rd party modules
const express =require('express');
const router = express.Router();


// User Routes
router.route('/').get(userController.getAllusers).post(userController.createuser);
router.route('/:id').get(userController.getuser).patch(userController.updateuser).delete(userController.deleteuser);

module.exports = router;