var Post = require('../../models/post');
var router = require('express').Router();
var websockets = require('../../websockets');

router.post('/', function (req, res, next) {
    var post = new Post({
        body: req.body.body
    })
    post.username = req.auth.username;

    post.save(function (err, post) {
        if (err) {
            return next(err);
        }
        websockets.broadcast('new post', post);
        res.json(201, post)
    })
})

router.get('/', function (req, res, next) {
    Post.find()
        .sort('-date')
        .exec(function (err, posts) {
            if (err)
                return next(err)
            res.json(posts);
        });
})

module.exports = router;