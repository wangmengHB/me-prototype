<template>
  <div class="main">
    <sidebar :data="sideData"
      v-on:update="loadSidebar"></sidebar>
    <div class="content"
      @click="collapse">
      <div class="nav">
        <div class="tree_right">
          <div v-for="(item,index) in htmlNav"
            v-html="item"
            :class="{'active':index===currentIdx}"
            class="titleNav"
            @click="go(index)"></div>
        </div>
      </div>
      <div id="markdownbody"
        class="markdown-body grey-scroll"
        @scroll="scrollList($event)"
        ref="main">
        <div style=" max-width: 700px; margin: 0 auto;">
          <p style="font-size: 28px; color: #333; padding: 35px 0 30px;"
            id="articletitle"></p>
          <div v-html="htmlRaw"></div>
          <div :style="{'height':(height-50)+'px'}"></div>
        </div>
      </div>
      <transition name="scroll-top-fade">
        <div class="scroll-top-btn"
          :class="{'hover': hoverScrollBtn}"
          v-show="showScrollTopBtn"
          @mouseenter="hoverScrollBtn = true"
          @mouseleave="hoverScrollBtn = false"
          @click="scrollTop">
          <img src="./../assets/float_scrolltop.png" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import sidebar from '../components/sidebar'

export default {
  components: {
    sidebar
  },
  data() {
    return {
      sideData: [],
      htmlRaw: '',
      htmlNav: '',
      ids: [],
      doms: {},
      currentIdx: 0,
      hoverScrollBtn: false,
      showScrollTopBtn: false,
      height: 0
    }
  },
  watch: {
    $route() {
      this.getData()
    },
    currentIdx() {
      const activedom = document.getElementsByClassName('titleNav active')
      if (activedom.length > 0) {
        const height = window.innerHeight - 70
        const scrollTop = activedom[0].offsetTop
        if (scrollTop + 100 - height > 0) {
          document.getElementsByClassName('nav')[0].scrollTop =
            scrollTop + 100 - height
        }
      }
    }
  },
  created() {
    this.loadSidebar()
    this.getData()
  },
  methods: {
    loadSidebar() {
      this.$http.get('/docsserver/sidebar').then(response => {
        this.sideData = JSON.parse(response.data.data)
      })
    },
    handleResize() {
      const topnav = document.getElementsByClassName('header')
      const main = this.$refs.main
      let win = window
      let text = 'inner'
      if (!('innerWidth' in window)) {
        win = document.documentElement || document.body
        text = 'client'
      }
      const winheight = win[text + 'Height']
      const winwidth = win[text + 'Width']
      if (topnav.length) {
        this.marginTop = topnav[0].clientHeight
      }
      if (main) {
        const height = Math.max(main.offsetHeight, main.scrollHeight)
        this.height = winheight - this.marginTop - (winwidth < 1200 ? 20 : 0)
        if (height > this.height) {
          this.scroll = 'scroll'
        } else {
          this.scroll = 'auto'
        }
      }
    },
    handleScroll() {
      const main = this.$refs.main
      this.showScrollTopBtn =
        main.scrollTop >= Math.min(main.clientHeight, main.scrollHeight) / 2
    },
    scrollTop() {
      this.hoverScrollBtn = false
      this.showScrollTopBtn = false
      this.$refs.main.scrollTop = 0
    },
    getData() {
      this.$http
        .get('/docsserver/md/' + this.$route.params.id)
        .then(response => {
          if (response.body.code === -1) {
            this.htmlRaw = '暂无相关资料'
            this.htmlNav = ['暂无相关资料']
          } else {
            this.htmlRaw = response.body.data[0]
            this.htmlNav = response.body.data[1]
            const navs = this.htmlNav.join('').match(/data_id=\"(\d|\-)+\"/g)
            if (navs) {
              this.ids = navs.map(m =>
                m.replace(/data_id=/g, '').replace(/"/g, '')
              )
            }
            var self = this
            setTimeout(() => {
              self.checkHref()
              self.setFeatures()
            }, 100)
          }
          document.getElementById(
            'articletitle'
          ).innerHTML = this.$store.state.articlename
        })
    },
    go(index) {
      document.querySelector('.markdown-body').scrollTop =
        document.getElementById(this.ids[index]).offsetTop - 20
    },
    scrollList(e) {
      var flag = true
      this.ids.map((m, index) => {
        if (!this.doms[m]) {
          this.doms[m] = document.getElementById(m)
        }
        if (this.doms[m]) {
          if (e.target.scrollTop < this.doms[m].offsetTop - 50 && flag) {
            flag = false
            this.currentIdx = index - 1
          }
          if (flag) {
            this.currentIdx = index
          }
        }
      })
    },
    checkHref() {
      let href = this.$route.params.href
      if (href) {
        this.htmlNav.map((m, index) => {
          if (m.indexOf(href) > -1) {
            this.go(index)
          }
        })
      }
    },
    setFeatures() {
      const fixtables = document.getElementsByTagName('fixtable')
      for (var i = 0; i < fixtables.length; i++) {
        fixtables[i].parentElement.setAttribute('class', 'fixtable')
      }
    },
    collapse() {
      if (!this.$store.state.collapse) {
        this.$store.commit('SET_COLLAPSE')
      }
    }
  },
  mounted: function() {
    window.addEventListener('resize', this.handleResize)
    this.$refs.main.addEventListener('scroll', this.handleScroll)
    this.handleResize()
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleResize)
    this.$refs.main.removeEventListener('scroll', this.handleScroll)
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
  overflow: hidden;
}

.content {
  display: flex;
  position: absolute;
  top: 0;
  left: 260px;
  right: 0;
  bottom: 0;
  transition: left 0.3s;

  .markdown-body {
    width: 100%;
    padding-left: 45px;
    padding-right: 270px;
    overflow: auto;
  }
}

.needRes {
  .content {
    .markdown-body {
      @media screen and (max-width: 768px) {
        padding-right: 45px;
      }
    }
  }

  .content {
    @media screen and (max-width: 768px) {
      left: 0;
    }
  }
}

.titleNav {
  position: relative;
  span {
    position: absolute;
    left: -25px;
    top: 2px;
    cursor: pointer;
    img {
      width: 15px;
    }
  }
}

.scroll-top-fade-enter,
.scroll-top-fade-leave-active {
  transform: translateY(-30px);
  opacity: 0;
}

.scroll-top-btn,
.float-advice-btn {
  position: fixed;
  right: 50px;
  bottom: 150px;
  width: 50px;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s;
  z-index: 1;
  img {
    display: block;
    line-height: 50px;
  }
  &.hover {
    opacity: 1;
  }
}
</style>
