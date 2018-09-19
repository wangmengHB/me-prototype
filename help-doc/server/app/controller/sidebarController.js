const fs = require('fs')
const path = require('path')
const co = require('co')
const thunkify = require('thunkify')
const storagePath = 'server/storage'
const uuidv1 = require('uuid/v1')

const sidebarRecursion = function (obj, dirs) {
  if (obj.childs) {
    for (var i = 0, len = obj.childs.length; i < len; i++) {
      sidebarRecursion(obj.childs[i], dirs)
    }
  } else {
    dirs.map.push(obj.md)
    dirs.docs.push(`docs/${obj.md}.md`)
    dirs.upload.push(`upload/${obj.md}`)
  }
}
const check = function (req, res, callback) {
  if (+req.body.type === 0) {
    // 新增
    const id = req.body.nfilename

    if (/[^\w-]/.test(id)) {
      res.json({
        code: -1,
        msg: '名称必须为英文字母或下划线'
      })
    } else {
      co(function* () {
          const filemap = (yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/map.json'), 'utf8')) || '{}'
          const mapList = JSON.parse(filemap)

          if (mapList[id]) {
            res.json({
              code: -1,
              msg: '该文件名已经存在,新增失败'
            })
          } else {
            // 文件名不存在，新增并保存
            const name = uuidv1()
            mapList[id] = name

            fs.writeFile(path.resolve(storagePath, 'config/map.json'), new Buffer(JSON.stringify(mapList)), 'utf8', () => {
              callback()
            })
          }
        })
        .catch((err) => {
          res.json({
            code: -1,
            msg: err.message
          })
        })
    }
  } else if (+req.body.type >= 1 && +req.body.type <= 3) {
    callback()
  } else if (+req.body.type === 4) {
    // 重命名
    const ofilename = req.body.ofilename
    const nfilename = req.body.nfilename

    if (ofilename === nfilename) {
      callback()
    } else {
      co(function* () {
          const filemap = (yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/map.json'), 'utf8')) || '{}'
          const mapList = JSON.parse(filemap)

          if (mapList[nfilename]) {
            res.json({
              code: -1,
              msg: '该文件名已经存在,修改失败'
            })
          } else {
            // 文件名不存在，更新
            mapList[nfilename] = mapList[ofilename]
            delete mapList[ofilename]

            fs.writeFile(path.resolve(storagePath, 'config/map.json'), new Buffer(JSON.stringify(mapList)), 'utf8', () => {
              callback()
            })
          }
        })
        .catch((err) => {
          res.json({
            code: -1,
            msg: err.message
          })
        })
    }
  } else if (+req.body.type === 5) {
    const current = req.body.current
    // 删除
    co(function* () {
        const filemap = (yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/map.json'), 'utf8')) || '{}'
        const mapList = JSON.parse(filemap)
        const mds = {
          map: [],
          docs: [],
          upload: []
        }

        // 如果为目录，找出所有md
        sidebarRecursion(JSON.parse(current), mds)

        mds.map.map(id => {
          const fname = mapList[id]

          // 删掉所有图片和文件夹
          if (fs.existsSync(path.resolve(storagePath, `upload/${fname}/`))) {
            const upload = fs.readdirSync(path.resolve(storagePath, `upload/${fname}/`))

            // 如果有图片，则遍历删除，必须同步删除，否则后面删除文件夹失败
            upload.forEach(file => {
              fs.unlinkSync(path.resolve(storagePath, `upload/${fname}/${file}`))
            })

            // 删除全部图片后也要将文件夹删掉
            fs.rmdir(path.resolve(storagePath, `upload/${fname}/`), (err) => {
              if (err) {
                throw err
              }
            })
          }

          // 删除所有md文档
          if (fs.existsSync(path.resolve(storagePath, `docs/${fname}.md`))) {
            fs.unlink(path.resolve(storagePath, `docs/${fname}.md`), (err) => {
              if (err) {
                throw err
              }
            })
          }

          // 重写map.json，必须同步，因为这里正在遍历
          if (mapList[id]) {
            delete mapList[id]
            fs.writeFileSync(path.resolve(storagePath, 'config/map.json'), new Buffer(JSON.stringify(mapList)), 'utf8')
          }
        })

        callback()
      })
      .catch((err) => {
        res.json({
          code: -1,
          msg: err.message
        })
      })
  }
}

exports.getSideBar = (req, res) => {
  co(function* () {
    const sidebar = (yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/sidebar.json'), 'utf8')) || '[]'
    const json = JSON.parse(sidebar)

    res.json({
      code: 1,
      data: json
    })
  }).catch(function (err) {
    res.json({
      code: -1,
      msg: err.message
    })
  })
}

exports.postSideBar = (req, res) => {
  check(req, res, () => {
    fs.writeFile(path.resolve(storagePath, 'config/sidebar.json'), new Buffer(JSON.stringify(req.body.data)), 'utf8', () => {
      res.json({
        code: 1,
        msg: '保存成功'
      })
    })
  })
}