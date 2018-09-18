const Router = require('express').Router()
const multer = require('multer')
const upload = multer()

const accountController = require('./controller/accountController')
const MarkdownController = require('./controller/MarkdownController')
const sidebarController = require('./controller/sidebarController')
const picsController = require('./controller/picsController')

Router.post('/login', accountController.login)

Router.get('/md/:id', MarkdownController.getMarkDownHtml)
Router.get('/mdFile/:id', MarkdownController.getMarkDownFile)
Router.post('/mdFile', MarkdownController.postMarkDownFile)
Router.get('/sidebar', sidebarController.getSideBar)
Router.post('/sidebar', sidebarController.postSideBar)
Router.get('/mdimg/:md', picsController.getImg)
Router.post('/mdimg/del', picsController.postImgDel)
Router.post('/mdimg/:code', upload.single('file'), picsController.postImg)

module.exports = Router