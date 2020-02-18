<template>
  <div id="miateContainer">
    <div class="misteHeader">
      <div class="logo"></div>
      <div class="inputContainer">
        <i class="iconfont iconfangdajing"></i>
        <input type="text" class="input" placeholder="搜索商品，共20267款好物">
      </div>
      <div class="login">登录</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped lang="stylus">
  #miateContainer
    width 100%
    padding 16px 30px
    box-sizing border-box
    .misteHeader
      // width 100%
      height 88px
      display flex
      justify-content space-between
      align-items center
      .logo
        width 138px
        height 40px
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp') 
        background-repeat no-reapt
        background-size cover
        overflow hidden
      .inputContainer
        width 442px
        height 56px
        display flex
        justify-content center
        align-items center
        background #EDEDED
        i 
          display block
          font-size 28px
          margin-right 10px
        .input
          height 42px
          background #ededed
      .login
        width 74px
        height 40px
        text-align center
        border-radius 10px
        line-height 40px
        box-sizing border-box
        border 2px solid #DD1A21
        color #DD1A21
        
</style>
