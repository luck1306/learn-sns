const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = {
    send: (req, res) => {
        res.send('sss');
    },
    login: (req, res, next) => {
        try {
            passport.authenticate('local', (autherror, user, info) => {
                if (autherror) {
                    return res.status(400).json({ message: 'error' });
                } else if (!user || info) {
                    return res.status(400).json(info);
                }
                req.login(user, { session: false }, (loginError) => {
                    if (loginError) return res.json(loginError);
                    const token = jwt.sign({
                        id: user.id,
                        name: user.name,
                        auth: user.auth
                    }, process.env.JWT_SECRET, {
                        expiresIn: '1m',
                    });
                    return res.json({ token });
                })
            })(req, res, next)
        } catch (err) {
            console.error(err);
            next(err);
        }
    },
    logout: (req, res, next) => {
        req.logout();
        req.session.destroy();
        res.json({ message: 'logout success' });
    }
}