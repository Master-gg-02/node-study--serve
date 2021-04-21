

const fs = require('fs');


let read=fs.createReadStream('./a.txt')
var write=fs.createWriteStream('./write-a.txt')
read.pipe(write)