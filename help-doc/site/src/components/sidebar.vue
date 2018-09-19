<template>
  <div :class="{'sidebar':true, 'grey-scroll':true, 'showScroll': showScroll}"
    @contextmenu.prevent="rclick"
    @click="opDialog=false"
    @mouseover="mouseover"
    @mouseout="mouseout">
    <div v-for="menu in data"
      class="accordion-title">
      <tree :model="menu"
        :level="1"></tree>
    </div>
    <div class="rightList"
      v-show="opDialog===true"
      :style="{'top':menuTop+'px','left':menuLeft+'px'}">
      <p @click="opFile(0)"
        v-show="opFloder">+文档</p>
      <p @click="opFile(1)"
        v-show="opFloder">+文档目录</p>
      <p @click="opFile(2)"
        v-show="nodeIdx>0">位置上移</p>
      <p @click="opFile(3)"
        v-show="nodeIdx>0">位置下移</p>
      <p @click="opFile(4)"
        v-show="nodeIdx!='sidebar'">重命名</p>
      <p @click="opFile(5)"
        v-show="nodeIdx!='sidebar'">删除</p>
    </div>
    <el-dialog title="文件"
      v-model="dialogFile"
      size="tiny">
      <p>文件名(文件的命名 如:ba_platform)</p>
      <el-input v-model="fileName"
        placeholder="文件名[英文]"></el-input>
      <p>文档标题(侧边导航的命名 如:技能创建指南)</p>
      <el-input v-model="title"
        placeholder="文档标题"></el-input>
      <span slot="footer"
        class="dialog-footer">
        <el-button @click="dialogFile = false">取 消</el-button>
        <el-button type="primary"
          @click="saveTree(1)">保 存</el-button>
      </span>
    </el-dialog>
    <el-dialog title="文档目录"
      v-model="dialogDir"
      size="tiny">
      <p>文档目录</p>
      <el-input v-model="dirName"
        placeholder="文档目录"></el-input>
      <span slot="footer"
        class="dialog-footer">
        <el-button @click="dialogDir = false">取 消</el-button>
        <el-button type="primary"
          @click="saveTree(2)">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tree from './tree.vue'

export default {
  components: {
    tree
  },
  props: ['data'],
  data() {
    return {
      opDialog: false,
      menuTop: 0,
      menuLeft: 0,
      nodeIdx: 0,
      opFloder: false,
      dialogFile: false,
      dialogDir: false,
      fileName: '',
      ofilename: '',
      title: '',
      dirName: '',
      optype: 0,
      currentMenuItem: {},
      currentMenu: {},
      showScroll: true
    }
  },
  methods: {
    rclick(event) {
      if (this.$route.path.indexOf('/editor') === -1) {
        return
      }
      let isRoot = false
      if (event.target.attributes[1].nodeValue.indexOf('sidebar') > -1) {
        isRoot = true
      }
      this.nodeIdx = isRoot ? 0 : event.target.attributes[0].nodeValue
      this.opFloder = isRoot
        ? true
        : +event.target.attributes[2].nodeValue === 1
      this.menuTop = event.pageY
      this.menuLeft = event.pageX
      this.opDialog = true
    },
    opFile(optype) {
      this.optype = optype
      if (optype === 0) {
        this.dialogFile = true
      } else if (optype === 1) {
        this.dialogDir = true
      } else if (optype === 2 || optype === 3) {
        this.currentMenu = JSON.parse(JSON.stringify(this.data))
        this.recursion(this.currentMenu)
        if (confirm('确定保存该操作?')) {
          this.saveTree()
        }
      } else if (optype === 4) {
        this.currentMenu = JSON.parse(JSON.stringify(this.data))
        this.recursion(this.currentMenu)
        if (this.currentMenuItem.md) {
          this.title = this.currentMenuItem.name
          this.fileName = this.currentMenuItem.md
          this.ofilename = JSON.parse(JSON.stringify(this.currentMenuItem.md))
          this.dialogFile = true
        } else {
          this.dirName = this.currentMenuItem.name
          this.dialogDir = true
        }
      } else if (optype === 5) {
        this.currentMenu = JSON.parse(JSON.stringify(this.data))
        this.recursion(this.currentMenu)
        if (confirm('确定删除?')) {
          this.saveTree()
        }
      }
    },
    recursion(obj) {
      for (var i = 0, ln = obj.length; i < ln; i++) {
        if (obj[i].idx === +this.nodeIdx) {
          this.currentMenuItem = obj[i]
          if (this.optype === 2 && i > 0) {
            // up
            obj[i] = obj.splice(i - 1, 1, obj[i])[0]
          } else if (this.optype === 3 && i < ln - 1 && ln > 1) {
            // down
            obj[i] = obj.splice(i + 1, 1, obj[i])[0]
          } else if (this.optype === 5) {
            obj.splice(i, 1)
          }
          break
        } else if (obj[i].childs) {
          this.recursion(obj[i].childs)
        }
      }
    },
    saveTree(kind) {
      if (kind === 1) {
        this.fileName = this.fileName.trim()
        this.title = this.title.trim()

        if (this.fileName === '' || this.title === '') {
          this.$message('请输入文件名和文档标题')
          return
        }
        if (this.optype === 0) {
          this.currentMenu = JSON.parse(JSON.stringify(this.data))
          this.recursion(this.currentMenu)
          let addObj
          if (this.nodeIdx === 0) {
            addObj = this.currentMenu
          } else {
            addObj = this.currentMenuItem.childs
          }
          addObj.push({
            name: this.title,
            md: this.fileName,
            idx: new Date().getTime()
          })
        } else if (this.optype === 4) {
          this.currentMenuItem.name = this.title
          this.currentMenuItem.md = this.fileName
        }
      } else if (kind === 2) {
        this.dirName = this.dirName.trim()

        if (this.dirName === '' || typeof this.dirName === 'undefined') {
          this.$message('请输入目录名')
          return
        }
        if (this.optype === 1) {
          this.currentMenu = JSON.parse(JSON.stringify(this.data))
          this.recursion(this.currentMenu)
          let addObj
          if (this.nodeIdx === 0) {
            addObj = this.currentMenu
          } else {
            addObj = this.currentMenuItem.childs
          }
          addObj.push({
            name: this.dirName,
            idx: new Date().getTime(),
            childs: []
          })
        } else if (this.optype === 4) {
          this.currentMenuItem.name = this.dirName
        }
      }
      this.$http
        .post('/docsserver/sidebar', {
          type: this.optype,
          data: JSON.stringify(this.currentMenu),
          current: JSON.stringify(this.currentMenuItem),
          nfilename: this.fileName,
          ofilename: this.ofilename
        })
        .then(response => {
          if (response.body.code === 1) {
            this.dialogFile = false
            this.dialogDir = false
            this.fileName = ''
            this.title = ''
            this.dirName = ''
            this.$emit('update')
          } else {
            this.$message({ message: response.body.msg })
          }
        })
    },
    mouseover() {
      this.showScroll = true
    },
    mouseout() {
      this.showScroll = false
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 260px;
  padding: 30px 0 0 5px;
  transition: left 0.3s;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);

  .rightList {
    position: fixed;
    border: 1px solid #ededed;
    padding: 5px;
    width: 115px;
    background: #fff;

    p {
      margin: 0;
      padding: 5px 8px;
      font-size: 12px;
      color: gray;
      cursor: pointer;
    }

    p:hover {
      background: #808080;
      color: white;
    }
  }

  a {
    color: #42b983;
    text-decoration: none;
  }

  .accordion-title {
    position: relative;
    line-height: 48px;
    font-size: 16px;
    font-weight: 600;
    color: #666;
    cursor: pointer;
    margin-top: -1px;

    .menu-item {
      width: 100%;
      display: block;
      font-weight: 200;
      position: relative;

      &.selected {
        color: #2196f3;
      }
    }

    .level_1 {
      font-size: 18px;
      color: #333;
      font-weight: normal;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;

      .menu-item {
        line-height: 40px;
        font-size: 16px;
        padding-left: 40px;
        position: relative;
        border: none;
        color: #666;

        &.selected {
          color: #0087dc;
          background-color: #dbe4f1;

          &:hover {
            background-color: #dbe4f1;
          }
        }
      }

      .menu-item:hover {
        background-color: #e5e5e5;
      }
    }

    li {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
  }
}

.needRes {
  .sidebar {
    z-index: 1;
  }

  &.collapse {
    .sidebar {
      @media screen and (max-width: 768px) {
        left: -260px;
      }
    }
  }
}

.showScroll {
  overflow: auto;
}
</style>
