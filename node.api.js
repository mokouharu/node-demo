/**
 * Created by zhj on 17/6/20.
 */
const buf1 = Buffer.alloc(5, 'Hello', 'utf8');

const buf2 = Buffer.from('Hello zhaohuijie');

console.log(buf1, buf2);

console.log(buf2.toString());

try {
    console.log(1);
    setTimeout(function(){
        console.log(2);
        throw new Error("This is a test error 2");
    }, 1000);
    console.log(3);
} catch(err) {
}
console.log(4);

// 断言
const assert = require('assert');
assert.deepEqual({a: 1}, {a: '1'});

const fs = require('fs');
fs.readFile('一个不存在的文件', (err, data) => {
    if (err) {
        console.error('读取文件出错！', err);
        return;
    }
    // 否则处理数据
});