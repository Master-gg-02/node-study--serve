
const fs = require('fs');
let dirArr = []
let fileArr = []
//实现查找当前目录中的文件夹和文件
let count = 0;
let str = '';
let aa = fs.createReadStream('a.txt')
aa.on('data', (data) => {
    str += data
    count++
})
aa.on('end', () => {
  console.log(str)
  console.log(count)

})
aa.on('error', (err) => {
    console.log(err)
})