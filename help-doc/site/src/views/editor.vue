<template>
  <div class="main markdownBox">
    <sidebar :data="sideData"
      v-on:update="loadSidebar"></sidebar>
    <div class="content">
      <div class="editor-btn-group">
        <el-button type="primary"
          class="uploadImg"
          @click="dialogVisible=true">图片资源</el-button>
        <el-button type="primary"
          class="saveBtn"
          @click="saveEvent">保存</el-button>
      </div>
      <div class="markdownInputIframe">
        <textarea :value="input"
          @input="updateInput"
          class="contextBox  grey-scroll"></textarea>
      </div>
      <div class="markdownOutputIframe  grey-scroll">
        <div v-html="compiledMarkdown"
          class="contextBox markdown-body grey-scroll"></div>
      </div>
      <el-dialog title="图片资源操作"
        size="large"
        v-model="dialogVisible">
        <div class="img_contain">
          <el-upload :action="'/docsserver/mdimg/' + code"
            :multiple="true"
            :data="{id:$route.params.md}"
            :headers="{token:token}"
            :on-success="loadImgs">
            <el-button size="small"
              type="primary">点击上传</el-button>
            <div slot="tip"
              class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <div class="imglist">
            <div class="imgitem"
              v-for="item in fileList">
              <p>{{item.name}}</p>
              <div>
                <img width="100%"
                  :src="item.url"
                  alt="">
              </div>
              <div class="btns">
                <span @click="handlePictureCardPreview(item)">预览</span>
                <span v-clipboard="'![Minion]('+item.url+')'">复制链接</span>
                <span @click="handleRemove(item)">删除</span>
              </div>
            </div>
          </div>
        </div>
      </el-dialog>
      <el-dialog v-model="dialogVisible2"
        size="large">
        <div style="text-align:center;">
          <img style="max-width:100%"
            :src="dialogImageUrl"
            alt="">
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import sidebar from '../components/sidebar'
import MarkdownIt from 'markdown-it'
import attrs from 'markdown-it-attrs'

const md = new MarkdownIt({
  breaks: true,
  html: true
})
md.use(attrs)

export default {
  components: {
    sidebar
  },
  data() {
    return {
      code: '',
      input: '',
      imgs: [],
      dialogVisible: false,
      dialogVisible2: false,
      fileList: [],
      dialogImageUrl: '',
      sideData: [],
      isnew: false
    }
  },
  computed: {
    compiledMarkdown: function() {
      return md.render(this.input, {
        sanitize: true
      })
    }
  },
  created() {
    this.code = this.$route.params.md
    this.token = localStorage.getItem('token')
    this.loadSidebar()
  },
  watch: {
    $route() {
      this.code = this.$route.params.md
      this.getData()
    }
  },
  methods: {
    getData() {
      this.$http.get('/docsserver/mdFile/' + this.code).then(response => {
        if (response.body.code === -1 && response.body.detail === 'NoSuchKey') {
          this.input = 'ready~'
          this.isnew = true
        } else if (response.body.code === -1) {
          this.input = 'no file'
        } else {
          this.input = response.body.data
        }
      })
      this.loadImgs()
    },
    loadImgs() {
      this.$http.get('/docsserver/mdimg/' + this.code).then(response => {
        this.fileList = []
        if (response.body.code !== -1) {
          var _imgs = response.body.data
          _imgs.map(m => {
            const pars = m.split('/')
            this.fileList.push({
              url: decodeURI(m),
              name: decodeURI(pars[pars.length - 1])
            })
          })
        }
      })
    },
    updateInput(e) {
      this.input = e.target.value
    },
    saveEvent() {
      this.$http
        .post('/docsserver/mdFile', {
          file: this.input,
          id: this.code,
          isnew: this.isnew,
          fname: this.$store.state.articlename,
          directory: this.$store.state.directory.join(',')
        })
        .then(response => {
          if (response.body.code === 1) {
            this.$message('保存成功')
          } else {
            this.$message(response.body.detail)
          }
        })
    },
    handleRemove(file) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http
          .post('/docsserver/mdimg/del', {
            md: this.$route.params.md,
            name: file.name
          })
          .then(response => {
            this.loadImgs()
            this.$message(response.body.msg)
          })
      })
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible2 = true
    },
    loadSidebar() {
      this.$http.get('/docsserver/sidebar').then(response => {
        this.sideData = JSON.parse(response.data.data)
        this.getData()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 1200px;
}

.content {
  position: absolute;
  top: 0;
  left: 260px;
  right: 0;
  bottom: 0;
  padding-top: 20px;
  padding-bottom: 20px;

  .markdown-body {
    padding: 0 45px;
    overflow: auto;
    width: 100%;
    padding-right: 270px;
  }
}

.editor-btn-group {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.markdownBox {
  box-sizing: border-box;
  .markdownInputIframe,
  .markdownOutputIframe {
    float: left;
    width: 50%;
    height: 99.7%;
  }
  .markdownOutputIframe {
    overflow: auto;
  }
  textarea {
    width: 100%;
    height: 100%;
    outline: none;
    line-height: 1.5em;
  }
  .contextBox {
    padding: 20px;
  }
  // .saveBtn,
  // .uploadImg {
  //   position: absolute;
  //   top: 10px;
  //   right: 20px;
  //   z-index: 2000;
  // }
  // .uploadImg {
  //   right: 100px;
  // }
  .img_contain {
    position: relative;
    padding-left: 60px;
    .imglist {
      display: flex;
      flex-wrap: wrap;
      .imgitem {
        width: 33.3%;
        padding: 10px;
        border-radius: 5px;
        p {
          border: 1px solid #d5d5d5;
          padding: 2px 5px;
          margin: 0 0 -1px 0;
          color: #50bfff;
          font-size: 12px;
        }
        > div {
          padding: 10px;
          border: 1px solid #d5d5d5;
        }
        .btns {
          margin-top: -1px;
          display: flex;
          span {
            width: 33.3%;
            text-align: center;
            cursor: pointer;
          }
        }
        .btns span:nth-child(1) {
          color: #50bfff;
        }
        .btns span:nth-child(2) {
          color: #13ce66;
        }
        .btns span:nth-child(3) {
          color: #ff4949;
        }
      }
    }
  }
}
</style>
