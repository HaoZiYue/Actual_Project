<template>
  <div id="FooterGuideContainer">
    <div class="footerItem" @click="goPath('/miste')" :class="{active:$route.path === '/miste'}">
      <span class="iconfont iconzhuye-copy icon"></span>
      <p class="text">首页</p>
    </div>
    <div class="footerItem" @click="goPath('/category')" :class="{active:$route.path === '/category'}">
      <span class="iconfont iconfenlei2 icon"></span>
      <p class="text">分类</p>
    </div>
    <div class="footerItem" @click="goPath('/worthy')" :class="{active:$route.path === '/worthy'}">
      <span class="iconfont iconzhidemai2 icon"></span>
      <p class="text">值得买</p>
    </div>
    <div class="footerItem" @click="goPath('/shoppingcar')" :class="{active:$route.path === '/shoppingcar'}">
      <span class="iconfont icongouwuche icon"></span>
      <p class="text">购物车</p>
    </div>
    <div class="footerItem" @click="goPath('/personal')" :class="{active:$route.path === '/personal'}">
      <span class="iconfont iconTemp-2 icon"></span>
      <p class="text">个人</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goPath(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped lang="stylus">
#FooterGuideContainer
  background #fff
  width 100%
  height 98px
  position absolute
  bottom 0
  left 0
  display flex
  justify-content space-around
  align-items center
  .footerItem
    text-align center
    &.active
      color #DD1A21
    .icon
      font-size 40px
    .text
      font-size 24px
      margin-top 7px





 
</style>
