<template>
  <li>
    <div :data_idx="model.idx" :data_level="level" :data_folder="isFolder?1:0" @click="toggle(model.md)" :class="{'menu-item':true,'selected':'/'+model.md===$route.path,'level_1':level===1,'level_2':level===2,'level_3':level===3}" :style="{'padding-left':(level*15+20)+'px'}">
      {{ model.name }}
      <img :class="{'leaf-arrow':true,'leaf-arrow-open':open}" v-if="isFolder" src="../assets/sanjiao.png" alt="">
    </div>
    <ul v-show="open" v-if="isFolder">
      <tree v-for="item in model.childs" :model="item" :level="level+1" :key="item.name"></tree>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'tree',
  props: ['model', 'level'],
  created(){
    this.checkNodes(true)
  },
  data () {
    return {
      open: false
    }
  },
  watch: {
    '$route' (nval, oval) {
      if (oval.path.indexOf('/editor/') === -1 && nval.path.indexOf('/editor/') > -1) {
        location.reload(true)
      } else {
        this.checkNodes()
      }
    }
  },
  computed: {
    isFolder () {
      return !this.model.md  // true:文件夹 false:文件
    }
  },
  methods: {
    toggle (path) {
      if (this.isFolder) {
        this.open = !this.open
      } else if (this.$route.path.indexOf('/editor') > -1) {
        this.$router.push('/editor/' + path)
      } else {
        if(!this.$store.state.collapse){
          this.$store.commit('SET_COLLAPSE')
        }

        this.$router.push('/' + path)
      }
    },
    checkNodes (firstIn) {
      let current = this
      if (this.model && this.model.childs){
        this.model.childs.map(m=>{
          if('/'+m.md===this.$route.path || '/editor/'+m.md===this.$route.path) {
            let directory = []
            directory.push(this.model.md || this.model.name) 
            this.open = true
            for(var idx = 0; idx < this.level - 1; idx++){
              if (firstIn) {
                current.$parent.open = true
              }
              directory.push(current.$parent.model.md || current.$parent.model.name)
              current = current.$parent
            }
            this.$store.commit('SET_DICTIONARY', directory)
            this.$store.commit('SET_ARTICLENAME', m.name)
          }
        })
      } else {
        if('/'+this.model.md===this.$route.path || '/editor/'+this.model.md===this.$route.path) {
          this.$store.commit('SET_ARTICLENAME', this.model.name)
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.leaf-arrow
  position absolute
.leaf-arrow-open
  transform rotate(90deg)
.level_1
  .leaf-arrow
    left 25px
    top 20px
.level_2
  .leaf-arrow
    left 42px
    top 16px
.level_3
  .leaf-arrow
    left 59px
    top 16px
.selected
  color #2196f3
</style>
