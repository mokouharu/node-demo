// 引入 express
import path from 'path';
import express from 'express';
let app = express();
// 引入路由
import indexRouter from './routes/index';
import userRouter from './routes/users';

// 用commonjs的require形式注入文件, 文件的输出必须要用commonjs规范的module.exports = **, 不能用es6 模块的export default * .
// var indexRouter = require('./routes/index');
// var userRouter = require('./routes/users');

// 引入模板文件
app.set('views', path.join(__dirname, 'views')); // 设置存放模板文件的目录
console.log(path.join(__dirname, 'views'));
console.log(path.join(__dirname, ''));
app.set('view engine', 'ejs'); // 设置模板引擎为 ejs

// 使用路由
app.use('/', indexRouter);
app.use('/users', userRouter);

// 创建服务器
let appPort = process.env.VCAP_APP_PORT || 8888;
console.log(process.env);
// app.get('/', (req, res) => {
//     console.log("application start ...");
//     res.send('hello, express');
// });
// app.get('/users/:name', (req, res) => {
//     res.send(`hello, ${req.params.name}`);
// })
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log(server.address());
	console.log('Example app listening at http://%s:%s', host, port);
});