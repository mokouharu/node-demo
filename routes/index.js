/**
 * Created by zhj on 17/6/14.
 */
import express from 'express';

let router = express.Router();

// router.get('/user/:id', (req, res) => {
//     console.log('Time:', Date.now());
//     next();
// });

// 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息
router.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
router.get('/user/:id', function (req, res, next) {
    // 如果 user id 为 0, 跳到下一个路由
    if (req.params.id == 0) next('route');
    // 负责将控制权交给栈中下一个中间件
    else next(); //
}, function (req, res, next) {
    // 渲染常规页面
    res.render('users', {
        name: `This is ${req.params.id}`
    });
});

// 处理 /user/:id， 渲染一个特殊页面
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id);
    res.render('users', {
        name: req.params.id
    });
});

// module.exports = router;

export default router;