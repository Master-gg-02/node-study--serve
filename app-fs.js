
const fs=require('fs');
// const mkdirp = require('mkdirp')
// let path='./upload'
let dirArr=[]
// mkdirp('./upload').then(made =>
//     console.log(`made directories, starting with ${made}`))
    fs.readdir('./',(err,data)=>{
        if(err){
            return 
        }
        (function getDir(i){
            if(i==data.length){
                console.log(dirArr)
                return
            }
            fs.stat('./'+data[i],(err,res)=>{
                if(res.isDirectory()){
                    dirArr.push(data[i])
                }
                getDir(i+1)
            })
        })(0)
    })