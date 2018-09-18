const fs = require('fs')
const path = require('path')
const thunkify = require('thunkify')
const co = require('co')
const storagePath = 'server/storage'

exports.getImg = (req, res) => {
  const id = req.params.md

  co(function* () {
      const filemap = (yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/map.json'), 'utf8')) || '{}'
      const mapList = JSON.parse(filemap)

      if (mapList[id]) {
        // 获取目录下所有文件
        if (!fs.existsSync(path.resolve(storagePath, `upload/${mapList[id]}`))) {
          fs.mkdirSync(path.resolve(storagePath, `upload/${mapList[id]}`))
        }

        const imgs = []
        const upload = yield thunkify(fs.readdir)(path.resolve(storagePath, `upload/${mapList[id]}`))

        upload.map(m => {
          imgs.push(`/docsserver/mdimg/img/${mapList[id]}/${m}`)
        })

        res.json({
          code: '1',
          msg: 'success',
          data: imgs
        })
      } else {
        res.json({
          code: -1
        })
      }
    })
    .catch((err) => {
      res.json({
        code: -1,
        detail: err.code
      })
    })
}

exports.postImg = (req, res) => {
  const id = req.params.code

  co(function* () {
      const filemap = (yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/map.json'), 'utf8')) || '{}'
      const mapList = JSON.parse(filemap)

      if (mapList[id]) {
        if (!fs.existsSync(path.resolve(storagePath, `upload/${mapList[id]}`))) {
          fs.mkdirSync(path.resolve(storagePath, `upload/${mapList[id]}`))
        }

        fs.writeFile(path.resolve(storagePath, `upload/${mapList[id]}/${req.file.originalname}`), new Buffer(req.file.buffer), 'utf8', (err) => {
          if (err) {
            throw err
          }

          res.json({
            code: 1,
            msg: '保存成功'
          })
        })
      } else {
        res.json({
          code: -1
        })
      }
    })
    .catch((err) => {
      res.json({
        code: -1,
        detail: err.code
      })
    })
}

exports.postImgDel = (req, res) => {
  const id = req.body.md

  co(function* () {
      const filemap = (yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/map.json'), 'utf8')) || '{}'
      const mapList = JSON.parse(filemap)

      if (mapList[id]) {
        if (fs.existsSync(path.resolve(storagePath, `upload/${mapList[id]}`)) &&
          fs.existsSync(path.resolve(storagePath, `upload/${mapList[id]}/${req.body.name}`))) {
          fs.unlink(path.resolve(storagePath, `upload/${mapList[id]}/${req.body.name}`), (err) => {
            if (err) {
              throw err
            }

            res.json({
              code: '1',
              msg: 'success'
            })
          })
        }
      } else {
        res.json({
          code: -1
        })
      }
    })
    .catch((err) => {
      res.json({
        code: -1,
        detail: err.code
      })
    })
}