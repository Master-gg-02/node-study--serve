
const fs = require('fs');
const md5=require('md5');
const hash = require('hash.js')
let str='';
for (let i =0;i<5000;i++){
    str+='我要写入数据了\n'
}
// let hashObject=hash.sha256().update('512545461').digest('hex')
let md5Object=md5('58566')
let writeStream=fs.createWriteStream('./write-'+md5Object+'.txt');
writeStream.write(str)
writeStream.end();
writeStream.on('finish',()=>{
    console.log('写入完成')
})