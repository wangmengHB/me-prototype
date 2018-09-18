<template>
  <div style="display: flex;width: 100%; height: 100%;">
    <div class="nav">
      <div class="tree_right">
        <div :class="{'titleNav':true,'active':currentIdx===-1}"></div>
        <div v-for="(item,index) in htmlNav" :key="index" v-html="item" :class="{'active':index===currentIdx,'titleNav':true}" @click="go(index)"></div>
      </div>
    </div>
    <div id="markdownbody" class="markdown-body grey-scroll" @scroll="scrollList($event)">
      <div style=" max-width: 700px; margin: 0 auto;">
        <p style="font-weight: bold;font-size: 28px; color: #333; padding: 35px 0 30px;" id="articletitle"></p>
        <div class="module" v-for="(list,index) in videoslist" :key="index">
          <h2 :id="'idx'+index">{{list.name}}</h2>
          <div class="list">
            <div class="card" v-for="(video,idx) in list.videos" :key="idx">
              <div @click="playVideo(video)">
                <img :src="video.img" alt="">
                <div>
                  <p class="title">{{video.title}}</p>
                  <p class="desc">{{video.desc}}</p>
                </div>
              </div>
            </div>
            <div style="clear:both;"></div>
          </div>
        </div>
        <div style="height:500px;"></div>
      </div>
    </div>

    <div class="video-layer" v-if="play">
      <div class="wrap">
        <my-video :sources="sources" :options="options" class="video"></my-video>
        <i class="el-tag__close el-icon-close video-close" @click="close"></i>
      </div>
      <div class="background-layer"></div>
    </div>
  </div>
</template>
<script>
import myVideo from "vue-video";
export default {
  components: {
    myVideo
  },
  data() {
    return {
      videoslist: [],
      htmlNav: [],
      ids: [],
      doms: [],
      currentIdx: -1,
      sources: [],
      options: {},
      play: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("/docsserver/md/videos").then(response => {
        if (response.body.code === -1) {
        } else {
          this.htmlNav = response.body.data[1];

          let el = document.createElement("html");
          el.innerHTML = response.body.data[0];
          const nodes = el.getElementsByTagName("body")[0].childNodes;
          let item = {};
          let num = 0;
          for (var i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node.nodeName === "H1") {
              if (i > 0) {
                this.videoslist.push(item);
              }
              this.ids.push(num);
              num++;
              item = {
                name: node.innerText,
                videos: []
              };
            }
            if (node.nodeName === "P") {
              const video = {};
              for (var idx = 0; idx < node.childNodes.length; idx++) {
                const m = node.childNodes[idx];
                if (m.nodeName === "A" && idx === 0) {
                  video.src = m.href;
                  video.title = m.innerText;
                } else {
                  video.img = m.href;
                  video.desc = m.innerText;
                }
              }
              item.videos.push(video);
            }
            if (i === nodes.length - 1) {
              this.videoslist.push(item);
            }
          }
          document.getElementById(
            "articletitle"
          ).innerHTML = this.$store.state.articlename;
        }
      });
    },
    go(index) {
      document.querySelector(".markdown-body").scrollTop =
        document.getElementById("idx" + index).offsetTop - 20;
    },
    playVideo(video) {
      this.sources = [
        {
          src: video.src,
          type: "video/mp4"
        }
      ];

      this.options = {
        autoplay: true,
        volume: 0.6,
        poster: video.img
      };

      this.play = true;
    },
    close() {
      this.sources = [];
      this.play = false;
    },
    scrollList(e) {
      var flag = true;
      this.ids.map((m, index) => {
        if (!this.doms[m]) {
          this.doms[m] = document.getElementById("idx" + m);
        }
        if (e.target.scrollTop < this.doms[m].offsetTop - 50 && flag) {
          flag = false;
          this.currentIdx = index - 1;
        }
        if (flag) {
          this.currentIdx = index;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.module {
  .list {
    max-width: 825px;
    margin: 0 -10px;
  }
  .card {
    float: left;
    width: 33.3%;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    img {
      max-width: 100%;
    }
    > div {
      padding: 10px;
      border: 1px solid #ededed;
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
.video-layer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2999;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  .wrap {
    position: absolute;
    top: 10%;
    width: 70%;
    left: 15%;
    background: #fff;
    z-index: 1;
    .video {
      background: #fff;
    }
    .video-close {
      position: absolute;
      top: -20px;
      right: -20px;
      font-size: 18px;
      cursor: pointer;
      &:before {
        color: #fafafa;
      }
    }
  }
  .background-layer {
    height: 100%;
    background: #000;
    opacity: 0.5;
  }
}
</style>

