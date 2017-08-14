/**
 * Created by zhj on 17/6/14.
 */
module.exports = {
    port: 3000,
    session: {
        secret: 'myblog',
        key: 'myblog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://127.0.0.1:27017/local'
};