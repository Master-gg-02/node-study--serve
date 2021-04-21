
const fs = require('fs');
const path = require('path');
const url = require('url');
const mime = require('mime');
exports.webStatic = (req, res, staticPath) => {
    let pathname = url.parse(req.url).pathname
    pathname = pathname == '/' ? '/index.html' : pathname;
    let exname = path.extname(pathname)
    if (pathname != '/favicon.ico') {
        try {
            let data = fs.readFileSync('./' + staticPath + pathname);
            if (data) {
                debuger
                let mimeType = mime.getType(exname)
                res.writeHead(200, { 'Content-Type': mimeType + ';charset="utf-8"' });
                res.end(data);
            }
        } catch (error) {
           console.log(error)
        }
    }
}