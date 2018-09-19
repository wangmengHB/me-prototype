<template>
  <div :class="{needRes: this.$route.meta.requiresResponsive, collapse: this.$store.state.collapse}"
    class="app-wrap">
    <headnav></headnav>
    <transition name="fade"
      mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
import headnav from './components/headnav'

export default {
  components: {
    headnav
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  text-decoration: none;
}

html body {
  width: 100%;
  height: 100%;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', Arial, sans-serif;
}

.float-left {
  display: block;
  float: left;
}

.float-right {
  display: block;
  float: right;
}

.icon {
  margin: 0;
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  font-size: 20px;
  fill: currentColor;
  overflow: hidden;
}

.icon-shibai {
  font-size: 14px;
}

.icon-shezhi {
  margin-right: 3px;
  font-size: 16px;
  vertical-align: -4px;
}

.dui-popover {
  position: absolute;
  right: 15px;
  font-size: 14px;
  color: #475669;
  background-color: #fff;
  box-shadow: 0 2px 10px #d7d7d7;
  border-radius: 4px;
}

.dui-popover-content {
  padding: 10px 15px;
}

.dui-popover-footer {
  padding: 10px 0;
  height: 45px;
  line-height: 25px;
  text-align: center;
  background-color: #f7f7f7;
  overflow: hidden;

  .el-button {
    width: 100%;
    padding: 0;
  }
}

.dui-popover-footer.flex {
  .el-button {
    width: 50%;
  }

  .el-button:first-child {
    border-right: 1px solid #d7d7d7;
    border-radius: 0;
  }
}

.ai-btn--text {
  color: #0097fa;
  background-color: transparent;
  border: none;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background-color: #fff;
}

/* 滚动条的滑轨背景颜色 */
::-webkit-scrollbar-thumb {
  background-color: rgba(151, 168, 190, 0.3);
  border-radius: 5px;
}

/* 滑块颜色 */
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(151, 168, 190, 0.5);
  border-radius: 5px;
}

.grey-scroll::-webkit-scrollbar {
  width: 6px;
}

.grey-scroll::-webkit-scrollbar-track {
  background-color: #fff;
}

/* 滚动条的滑轨背景颜色 */
.grey-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(151, 168, 190, 0.3);
  border-radius: 5px;
}

/* 滑块颜色 */
.grey-scroll::-webkit-scrollbar-thumb:hover {
  background-color: rgba(151, 168, 190, 0.5);
  border-radius: 5px;
}

.app-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}

.content {
  .nav {
    position: fixed;
    right: 30px;
    top: 120px;
    overflow: auto;

    .tree_right {
      background: #fff;
      padding: 0 20px;
      width: 220px;
      border-left: 1px solid #20a0ff;
      margin-top: 20px;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        position: relative;
        font-weight: 100;
        cursor: pointer;
      }

      h1 {
        font-size: 14px;
        color: #333;
      }

      h2 {
        font-size: 12px;
        padding-left: 10px;
        margin: 4px 0;
        color: #666;
        font-weight: 200;
      }

      .active {
        h1,
        h2 {
          color: #20a0ff;
        }
      }
    }
  }
}

.needRes {
  .content {
    .nav {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .markdown-body {
      @media screen and (max-width: 768px) {
        padding-right: 45px;
      }
    }
  }
}
</style>
