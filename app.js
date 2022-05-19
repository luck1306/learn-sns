const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config;

const indexRouter = require('./routes');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // true는 qs모듈, false는 querystring모듈
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(indexRouter);

module.exports = app;
/*
    "bcrypt": "^5.0.1",
    "express": "^4.18.1",
    "express-session": "^1.17.3",
    "cookie-parser": "^1.4.6",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.3.3",
    "passport": "^0.5.3",
    "passport-jwt": "^4.0.0",
    "passport-kakao": "^1.0.1",
    "passport-local": "^1.0.0",
    "uuid": "^8.3.2"
 */

/*
게시글 CRUD
User 간 follow
Profile 변경
비밀번호 변경
외부 API 호출
API 명세서 작성
jwt로 로그인
*/