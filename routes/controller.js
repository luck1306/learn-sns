const passport = require('passport');
const jwt = require('jsonwebtoken');
const Post = require('../models/post');

module.exports = {
    send: (req, res) => {
        res.send('sss');
    },
    post: async (req, res, next) => {
        try {//no에 autoincrement되는지
            const userID = await Post.create({
                description: req.body.description,
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    },
    delete: async (req, res, next) => { // url의 값을
        try {
            await Post.destroy({ where: { no: req.params.no } });
            return res.json({ message: "성공적으로 삭제되었습니다" });
        } catch (err) {
            console.error(err);
            next(err);
        }

    },
}