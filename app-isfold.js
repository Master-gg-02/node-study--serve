
const fs = require('fs');
let dirArr = []
let fileArr=[]
//实现查找当前目录中的文件夹和文件
fs.readdir('./', async (err, data) => {
    if (err) {
        return
    }
    for (let n in data){
        if (await isDir(data[n])) {
            dirArr.push(data[n])
        }else{
            fileArr.push(data[n])
        }
    }
    console.log(dirArr)
    console.log(fileArr)
})
// 判断是否是文件夹
async function isDir(path) {
    return new Promise((resolve, reject) => {
        fs.stat('./' + path, (err, res) => {
            if (err) {
                reject(err)
            }
            if (res.isDirectory()) {
                resolve(true)
            } else {
                resolve(false)
           
            }
        })
    })
}

