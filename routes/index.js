const router = require('express').Router();
const ctrl = require('./controller');
const auth = require('./auth');

router.get('/', ctrl.send);
router.post('/login', ctrl.login);

module.exports = router;