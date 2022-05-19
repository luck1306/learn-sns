const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const passportConfig = { usernameField: 'userId', passwordField: 'password' };
const passportVerify = async (userId, password, done) => {
    try {
        const user = await User.findOne({ where: { userId } });
        if (!user) {
            return done(null, false, { message: 'user don\'t exist' });
        }
        const passwordResult = await bcrypt.compare(password, user.password);
        if (!passwordResult) {
            return done(null, false, { message: `password incorrect` });
        }
        done(null, user);
    } catch (err) {
        console.error(err);
        done(err);
    }
};

module.exports = (passport.use('local', new localStrategy(passportConfig, passportVerify)));