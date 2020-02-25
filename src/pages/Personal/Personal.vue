<template>
  <div class="profileContainer1">
    <div class="profileTop">
      <i @click="$router.push('/miste')" class="iconfont iconTemp-3"></i>
      <div class="sprit"></div>
      <i class="iconfont iconfangdajing"></i>
      <i class="iconfont icongouwuche1"></i>
    </div>
    <div class="logo1">
      <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <div class="phone">
      <i></i>
      <span>手机号登录</span>
    </div>
    <div class="email">
      <i></i>
      <span>邮箱账号登录</span>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.profileContainer1
  background #f2f5f4
  width 100%
  height 1355px
  .profileTop
    width 750px
    height 100px
    background #ffffff
    padding 0 26px 0 24px
    box-sizing border-box
    position fixed
    text-align center
    line-height 100px
    position relative
    i
      width 46px
      font-size 48px
    .iconTemp-3
      float left  
    .icongouwuche1
      float right
    .iconfangdajing
      position absolute
      right  90px
    img 
      width 172px
      height 54px
      margin-top 25px
  .logo1
    width 100%
    height 482px
    padding 160px 0 232px 0
    box-sizing border-box
    img 
      width 268px
      height 90px
      margin-left 241px
  .phone
    width 670px
    height 94px
    background #dd1a21
    text-align center
    line-height 94px
    margin-bottom 32px
    margin-left 40px
    font-size 28px
    color #ffffff
  .email
    width 670px
    height 94px
    border 1px solid #dd1a21
    text-align center
    line-height 94px
    margin-left 40px
    color #dd1a21
    font-size 28px



 
</style>


