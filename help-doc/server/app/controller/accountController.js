const fs = require('fs')
const path = require('path')
const thunkify = require('thunkify')
const co = require('co')
const jwt = require('jwt-simple')
const moment = require('moment')
const storagePath = 'server/storage'

exports.login = (req, res) => {
  co(function* () {
      if (!req.body.account || !req.body.pwd) {
        res.send({
          code: -1,
          detail: 'error',
          msg: 'need account or pwd'
        })
      } else {
        const account = yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/account.json'), 'utf8')
        const json = JSON.parse(account)

        if (json.admin.account === req.body.account && json.admin.pwd === req.body.pwd) {
          const expires = moment().add(7, 'days').valueOf()
          var token = jwt.encode({
            account: json.admin.account,
            exp: expires
          }, json.secret)
          res.send({
            code: 1,
            detail: 'success',
            token: token
          })
        } else {
          res.send({
            code: -1,
            detail: 'error',
            msg: '账户密码错误'
          })
        }
      }
    })
    .catch((err) => {
      res.json({
        code: -1,
        detail: err.code
      })
    })
}