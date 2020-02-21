<template>
  <div id="FooterGuideContainer">
    <div class="footerItem" @click="goPath('/miste')">
      <span class="iconfont iconzhuye-copy icon" :class="{active:$route.path === '/miste/recommend'}" ></span>
      <p class="text" :class="{activeText:$route.path === '/miste/recommend'}" >首页</p>
    </div>
    <div class="footerItem" @click="goPath('/category')" >
      <span class="iconfont iconfenlei2 icon" :class="{active:$route.path === '/category'}"></span>
      <p class="text" :class="{activeText:$route.path === '/category'}">分类</p>
    </div>
    <div class="footerItem" @click="goPath('/worthy')">
      <span class="iconfont iconzhidemai2 icon" :class="{active:$route.path === '/worthy'}"></span>
      <p class="text" :class="{activeText:$route.path === '/worthy'}">值得买</p>
    </div>
    <div class="footerItem" @click="goPath('/shoppingcar')">
      <span class="iconfont icongouwuche icon" :class="{active:$route.path === '/shoppingcar'}"></span>
      <p class="text" :class="{activeText:$route.path === '/shoppingcar'}">购物车</p>
    </div>
    <div class="footerItem" @click="goPath('/personal')">
      <span class="iconfont iconTemp-2 icon" :class="{active:$route.path === '/personal'}"></span>
      <p class="text" :class="{activeText:$route.path === '/personal'}">个人</p>
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
  position fixed
  bottom 0
  left 0
  display flex
  justify-content space-around
  align-items center
  .footerItem
    text-align center
    .icon
      font-size 40px
      &.active
        color #DD1A21
    .text
      font-size 24px
      margin-top 7px
      &.activeText
        color #DD1A21





 
</style>
