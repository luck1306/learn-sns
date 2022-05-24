const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    join: async (req, res, next) => {
        try {
            const existUser = await User.findOne({ where: { userId: req.body.userId } });
            if (existUser) {
                return res.json({ message: "이미 존재하는 아이디입니다." });
            }
            const savePW = await bcrypt.hash(req.body.password, 12);
            User.create({
                userId: req.body.userId,
                password: savePW,
                name: req.body.name
            }).then((info) => {
                return res.json({ message: 'success', info });
            }).catch(console.error);
        } catch (err) {
            console.error(err);
            next(err);
        }
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
            })
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