const express = require('express');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');



router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.get('/', usersCtrl.index);
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

module.exports = router;
