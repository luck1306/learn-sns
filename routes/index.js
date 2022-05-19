const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.send);
router.post('/login', controller.login);

router.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.status = process.env.NODE_ENV != 'production' ? err : {};
    res.status(err.status || 500).json(err);
});

module.exports = router;