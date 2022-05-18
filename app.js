const express = require('express');
require('dotenv').config;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(indexRouter);

module.exports = app;
/*
    "bcrypt": "^5.0.1",
    "express": "^4.18.1",
    "mysql2": "^2.3.3",
    "passport": "^0.5.3",
    "passport-kakao": "^1.0.1",
    "passport-local": "^1.0.0",
    "uuid": "^8.3.2"
 */