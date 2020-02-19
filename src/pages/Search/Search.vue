<template>
  <div id="searchContainer" >
      <div class="searchInput" v-if="searchList">
        <div class="inputContainer">
          <span class="iconfont iconfangdajing"></span>
          <input type="text" :placeholder="searchList.defaultKeyword.keyword">
        </div>
        <div class="cancel" @click="$router.replace('/miste')">取消</div>
      </div>
      <div class="hotSearch">
        <div class="hotSearchTitle">热门搜索</div>
        <div class="hotSearchItems" v-if="searchList">
          <div class="item" v-for="(item, index) in searchList.hotKeywordVOList" :key="index" :class="{active:index===0 || index === 4}">{{item.keyword}}</div>
        </div>
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import {mapState} from 'vuex'
  export default {
    mounted(){
        this.$store.dispatch('getSearchItems')
    },
    methods:{
      
    },
    computed:{
      ...mapState({
        searchList:state => state.searchList.data
      })
    }
  }
</script>

<style scoped lang="stylus">
#searchContainer
  width 100%
  background #fff
  padding 0 30px
  box-sizing border-box
  .searchInput
    height 88px 
    display flex
    justify-content space-between
    align-items center
    .inputContainer
      width 604px
      height 56px
      background #f4f4f4
      display flex
      align-items center
      padding 0 20px
      box-sizing border-box
      color rgba(0,0,0,.8)
      span 
        margin-right 16px
        font-size 30px
      input 
        width 520px
        height 39px
        padding-left 2px
        box-sizing border-box
        background #f4f4f4
        font-size 28px 
        
        &:focus//去除聚焦时的轮廓线
          outline none
    .cancel
      margin-left 30px
      font-size 28px 
  .hotSearch
    padding-bottom 30px 
    .hotSearchTitle
      height 90px
      line-height 90px
      color #999
      font-size 28px
    .hotSearchItems
      // height 200px
      overflow hidden
      margin 0 -30px 0 0
      .item
        float left
        font-size 24px
        text-align center
        height 48px
        max-width 250px
        white-space nowrap
        overflow hidden
        box-sizing border-box
        border 1px solid #999
        line-height 45px
        border-radius 5px
        // vertical-align middle
        padding 0 15px
        margin-right 32px
        margin-bottom 32px
        &.active
          color #dd1a21
          border-color #dd1a21

</style>
