/**
 * Created by zhj on 17/6/14.
 */
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/posts');
    }, function (req, res) {
        res.redirect('/signup');
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
};