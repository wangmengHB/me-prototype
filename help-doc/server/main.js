const fs = require('fs')
const path = require('path')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const jwt = require('jwt-simple')
const Router = require('./app/routes')
const storagePath = 'server/storage'

const server = express()

server.use(compression({
  threshold: 0
}))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))

server.all('*', (req, res, next) => {
  if ((req.method === 'POST' && req.params[0] !== '/docsserver/login') || 
    req.route.path === '/docsserver/mdFile/:id'
  ) {
    const token = req.get('token')

    if (token) {
      try {
        const accountFile = fs.readFileSync(path.resolve(storagePath, 'config/account.json'), 'utf8')
        const json = JSON.parse(accountFile)
        const account = jwt.decode(token, json.secret)

        if (json.admin.account === account.account) {
          next()
        } else {
          res.json({
            code: -1010,
            detail: 'token error!'
          })
        }
      } catch (err) {
        res.json({
          code: -1010,
          detail: 'token  error!'
        })
      }
    } else {
      res.json({
        code: -1010,
        detail: 'need permission!'
      })
    }
  } else {
    next()
  }
})
server.use('/docsserver', Router)
server.use('/', express.static('./dist/docs'))
server.use('/docsserver/mdimg/img', express.static('./server/storage/upload'))

var site = server.listen(3002, function () {
  var host = site.address().address
  var port = site.address().port

  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})