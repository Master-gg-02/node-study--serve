const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();
app.engine('html', ejs.__express)
app.set('view engine', 'html')
// 内置中间件 静态外部服务
app.use(express.static('static'));

// 第三方中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

//express 中间件
// 应用级中间件 内置中间件
// 静态文件
app.use((req, res, next) => {
   console.log(new Date())
   // do somthing 一般用于权限判断
   next()
})

app.get('/', function (req, res) {
   let username=req.cookies.username
   console.log(username)
   let obj = {
      webSiteName: '蜜特源',
      author: username==undefined?'游客':username
   }
   res.render('index', {
      obj: obj
   })
})
app.get('/product/add', function (req, res, next) {
   // 路由中间件
   res.send('product')
   next();
})
app.get('/product/:id', function (req, res) {
   res.send('product')
})
app.get('/login', function (req, res) {
   res.render('login')
})
app.post('/tologin', function (req, res) {
   let body = req.body
   res.cookie("username", body.username,{
      maxAge:1000*60*30,
   })

   res.send(body)
})

app.use((req, res) => {
   //错误处理中间件
   console.log(new Date())
   res.send('404')
   next()
})



app.listen(3000)
console.log('http://127.0.0.1:3000')