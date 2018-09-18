<template>
  <div class="search-content">
    <div style="padding:0 220px;">
      <template>
        <div class="search_total" v-if="ajaxing">
          <span class="back" @click="back">
            < 返回帮助</span>
              搜索中,请稍等...
        </div>
        <div class="search_total" v-else>
          <span class="back" @click="back">
            < 返回帮助</span>
              找到{{total}}条关于"{{kwd}}"结果
        </div>
        <div v-show="!noResult" v-for="(res,index) in searchResult" :key="index">
          <div class="result">
            <div class="title">
              <p @click="goDocument(res._source.filename)" v-html="(res.highlight.title && res.highlight.title.join('')) || res._source.title"></p>
            </div>
            <p v-if="res.highlight.content" class="double-ellipsis doc-content" v-html="res.highlight.content.join('')"></p>
            <p class="time">
              <label>创建时间:&nbsp;{{res._source.create_ts | timeFormat}}</label>
              <label>最后修改时间:&nbsp;{{res._source.last_modify_ts | timeFormat}}</label>
            </p>
          </div>
        </div>
        <div v-show="noResult" style="margin: 200px 0 50px;text-align: center;">
          <img src="../assets/ico_result.png" alt="抱歉!  没有找到内容" style="vertical-align: middle;margin-right: 50px;">抱歉! 没有找到内容
        </div>
      </template>
      <el-pagination style="margin: 30px -20px;" small layout="prev, pager, next" :current-page.sync="page" :total="total" @current-change="handleCurrentChange" :page-size="10" v-show="total>10"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      total: 0,
      kwd: "",
      currTab: "pors",
      noResult: false,
      ajaxing: true,
      searchResult: []
    };
  },
  created() {
    this.ajaxing = true;
    this.goSearch();
  },
  methods: {
    goDocument(file) {
      this.$router.push("/" + file);
    },
    goSearch() {
      this.kwd = this.$route.params.kwd;
      const offset = (this.page - 1) * 10;
      this.$http
        .get(
          `/rest/v1/search/dui_resource?kwd=${
            this.kwd
          }&offset=${offset}&size=10&rt=helpdoc`
        )
        .then(response => {
          if (response.body.error_code === 0) {
            this.searchResult = response.body.result.items;
            this.total = response.body.result.total;
            if (this.total === 0) {
              this.noResult = true;
            } else {
              this.noResult = false;
            }
            this.ajaxing = false;
          }
        });
    },
    handleCurrentChange(page) {
      this.page = page;
      this.goSearch();
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
p {
  margin: 0;
}
.search-content {
  position: absolute;
  left: -260px;
  background: #fff;
  right: 0;
  min-height: 100%;
}
.search_total {
  font-size: 14px;
  color: #959595;
  margin-top: 20px;
  position: relative;
  .back {
    color: #2196f3;
    font-size: 16px;
    position: absolute;
    left: -150px;
    cursor: pointer;
  }
}
.result {
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
}
.title p {
  color: #0068be;
  font-size: 18px;
  margin-bottom: 15px;
  display: inline-block;
  cursor: pointer;
}
tag1 {
  color: #ef382d;
}
.doc-content {
  max-height: 45px;
}
.time label {
  font-size: 12px;
  color: #a0a0a0;
  margin-right: 20px;
}
.double-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.double-ellipsis,
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}
.el-pager li.active {
  border-radius: 100%;
}
</style>

