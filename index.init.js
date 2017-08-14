// 引入 express
import express from 'express';
let app = express();

// 创建服务器
let appPort = process.env.VCAP_APP_PORT || 8888;
app.get('/', (req, res) => {
    console.log("application start ...");
    res.send('hello, express');
});
app.get('/users/:name', (req, res) => {
    res.send(`hello, ${req.params.name}`);
})
app.listen(3000);