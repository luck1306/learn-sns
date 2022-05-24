const router = require('express').Router();
const ctrl = require('./controller');
const auth = require('./auth');

router.get('/', ctrl.send);
router.post('/poting', ctrl.post);
router.delete('/:no', ctrl.delete);

router.use('/auth', auth);

module.exports = router;