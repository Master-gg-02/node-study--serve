const http = require('http');
const router = require('./router/index.js');
const url = require('url');
const ejs = require('ejs');
http.createServer(function (req, res) {
    router.webStatic(req, res, 'static')
    let pathname = url.parse(req.url).pathname;
    let mimeType = 'text/html';
    console.log(pathname)
    if (pathname == '/news') {
        // http://127.0.0.1:8081/news?id=5&type=1
        let query = url.parse(req.url).query;
        console.log(query)
        console.log(req.method)
        res.writeHead(200, { 'Content-Type': mimeType + ';charset="utf-8"' });
        res.end(JSON.stringify(query));
    } else if (pathname == '/login') {
        let msg = "sss";
        ejs.renderFile('./views/login.ejs', { msg: msg }, function (err, str) {
            res.writeHead(200, { 'Content-Type': mimeType + ';charset="utf-8"' });
            res.end(str);
        });
    } else if (pathname == '/logined') {
        let postData='';
        req.on('data',(trunk)=>{
            postData+=trunk
        })
        req.on('end',()=>{
            console.log(postData)
            res.end(JSON.stringify(postData));
        })
    } else if (pathname == '/admin') {
        res.writeHead(200, { 'Content-Type': mimeType + ';charset="utf-8"' });
        res.end('管理');
    } else {
        res.writeHead(404, { 'Content-Type': mimeType + ';charset="utf-8"' });
        res.end('页面不存在！');
    }
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');