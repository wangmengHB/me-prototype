<template>
  <div class="header">
    <div class="bar-control" @click="collapse"></div>
    <div class="menu">
      <div class="title float-left">
        UI toolkit 帮助文档
      </div>
      <div class="title float-right" v-if="ifLogin">
        <a @click.prevent="loginout">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ifLogin: false
    }
  },
  created() {
    this.ifLogin = !!localStorage.getItem('token')
  },
  watch: {
    $route() {
      this.ifLogin = !!localStorage.getItem('token')
    }
  },
  methods: {
    loginout() {
      localStorage.removeItem('token')
      const toPath = this.$router.currentRoute.path.split('/')[2] || ''
      this.$router.push('/' + toPath)
    },
    collapse(){
      this.$store.commit('SET_COLLAPSE')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  width: 100%;
  min-width: 700px;
  height: 56px;
  padding: 0 40px;
  font-size: 16px;
  background-color: #fff;
  box-shadow: 1px 2px 10px #ced4da;

  .bar-control {
    display: none;
    position: absolute;
    top: 15px;
    left: 15px;
    width: 26px;
    height: 26px;
    background: url('../assets/svg/bars.svg') no-repeat center center;
    background-size: contain;

    &:hover {
      background-color: #fafafa;
    }
  }
}

.needRes .header {
  .bar-control {
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
}

.title {
  margin: 0 20px;
  line-height: 56px;
}

.title a {
  cursor: pointer;
  &:hover {
    color: #0098fb;
  }
}

</style>
