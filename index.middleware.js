/**
 * Created by zhj on 17/6/14.
 */
import path from 'path';
// 引入 express
import express from 'express';

let app = express();

// 引入路由
import indexRouter from './routes/index';

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use((req, res, next) => {
    console.log(111);
    // 通过next将请求传递到下一个中间件
    next();

    // next 可接受一个参数用来接收错误信息: next(error), 则会返回错误而不会传递下一个中间件
    // next(new Error(404));

});

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use('/user/:id', (req, res, next) => {
    console.log(222);
    next();
    // res.status(200).end();
});

// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
// app.get('/user/:id', function (req, res, next) {
//     res.send(`hello, ${req.params.id}`);
// });

// 一个中间件栈，对任何指向 /user/:id 的 HTTP 请求打印出相关信息
app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    res.send(`hello, ${req.params.id}`);
});

// 引入模板文件
app.set('views', path.join(__dirname, 'views')); // 设置存放模板文件的目录
console.log(path.join(__dirname, 'views'));
console.log(path.join(__dirname, ''));
app.set('view engine', 'ejs'); // 设置模板引擎为 ejs

// 使用路由
app.use('/signup', indexRouter);

//错误处理
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});



app.listen(3000);