const express = require('express');

const authController = require('../controllers/auth');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/login', authController.login);

router.post('/update-password/:uid', authController.updatePassword);

// router.use(checkAuth);

router.get('/users', authController.getUsers);

router.get('/user/:uid', authController.getUser);

router.post('/register', authController.register);

router.patch('/update/:uid', authController.update);

router.delete('/remove/:uid', authController.remove);

module.exports = router;