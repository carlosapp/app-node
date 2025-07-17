const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');

router.get('/', userController.getForm);
router.post('/cadastrar', userController.createUser);

module.exports = router;
