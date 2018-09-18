const fs = require('fs')
const path = require('path')
const thunkify = require('thunkify')
const co = require('co')
const {
  JSDOM
} = require('jsdom')
const markdown = require('../service/markdown')

const storagePath = 'server/storage'
const getTree = function (doms) {
  const tree = []
  for (let i = 0, ln = doms.children.length; i < ln; i++) {
    if ('H1H2'.indexOf(doms.children[i].tagName) > -1) {
      tree.push(doms.children[i].outerHTML.replace('id', 'data_id'))
    }
  }
  return tree
}

exports.getMarkDownHtml = (req, res) => {
  const id = req.params.id

  co(function* () {
      const filemap = (yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/map.json'), 'utf8')) || '{}'
      const mapList = JSON.parse(filemap)

      if (mapList[id]) {
        const markdownContent = yield thunkify(fs.readFile)(path.resolve(storagePath, `docs/${mapList[id]}.md`), 'utf8')
        const html = markdown.renderMarkDown(markdownContent)
        const doms = new JSDOM('<div id="doms">' + html + '</div>')
        const trees = getTree(doms.window.document.querySelector('#doms'))

        res.json({
          code: 1,
          data: [html, trees]
        })
      } else {
        res.json({
          code: -1
        })
      }
    })
    .catch(() => {
      res.json({
        code: -1,
        detail: 'err'
      })
    })
}

exports.getMarkDownFile = (req, res) => {
  const id = req.params.id

  co(function* () {
      const filemap = (yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/map.json'), 'utf8')) || '{}'
      const mapList = JSON.parse(filemap)

      if (mapList[id]) {
        const markdownContent = yield thunkify(fs.readFile)(path.resolve(storagePath, `docs/${mapList[id]}.md`), 'utf8')

        res.json({
          code: 1,
          data: markdownContent
        })
      } else {
        res.json({
          code: -1
        })
      }
    })
    .catch(() => {
      res.json({
        code: -1,
        detail: 'err.message'
      })
    })
}

exports.postMarkDownFile = (req, res) => {
  const id = req.body.id

  co(function* () {
      const filemap = (yield thunkify(fs.readFile)(path.resolve(storagePath, 'config/map.json'), 'utf8')) || '{}'
      const json = JSON.parse(filemap)

      if (json[id]) {
        yield thunkify(fs.writeFile)(path.resolve(storagePath, `docs/${json[id]}.md`), new Buffer(req.body.file), 'utf8')

        res.json({
          code: 1,
          data: '保存成功'
        })
      } else {
        throw new Error('文件名不存在')
      }
    })
    .catch((err) => {
      res.json({
        code: -1,
        detail: err.message
      })
    })
}