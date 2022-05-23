const router = require('express').Router();
const ctrl = require('./auth.ctrl');

router.post('/join', ctrl.join);
router.post('/login', ctrl.login);
router.post('/logout', ctrl.logout);

module.exports = router;