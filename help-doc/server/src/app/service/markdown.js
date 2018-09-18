const markdown = require('markdown-it')({
  breaks: true,
  html: true
})
const markdownItAttrs = require('markdown-it-attrs')
const markdownItAnchor = require('markdown-it-anchor')

markdown.use(markdownItAttrs)
markdown.use(markdownItAnchor, {
  level: 1,
  slugify: string => +new Date(),
  permalink: false
})

exports.renderMarkDown = function (md) {
  return markdown.render(md)
}