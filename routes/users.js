/**
 * Created by zhj on 17/6/14.
 */
import express from 'express';

let router = express.Router();

router.get('/:name', (req, res) => {
    // res.send(`hello, ${req.params.name}`);
    // 渲染ejs模板, 第一个参数是模板的名字,第二个参数是传给模板的数据
    // res.render的作用是将模板和数据结合生成html, 同时设置响应头中的Content-Type: text/html
    res.render('users', {
        name: req.params.name
    })
});

// module.exports = router;

export default router;