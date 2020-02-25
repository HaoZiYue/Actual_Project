<template>
  <div id="shoppingCartContainer">
    <div class="shoppingTop">
      <div class="cartTitle">购物车</div>
      <div class="getTicket">领券</div>
    </div>
    <div class="service">
      <ul class="serviceUl">
        <li class="serviceLi">
          <i></i>
          <span>30天无忧退货</span>
        </li>
        <li class="serviceLi">
          <i></i>
          <span>48小时快速退款</span>
        </li>
        <li class="serviceLi">
          <i></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="notLogin">
      <div class="empty-img_text">
        <div class="img">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" alt="">
        </div>
        <div class="text">去添加点什么吧</div>
      </div>
      <div class="loginBtn">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
#shoppingCartContainer
  width 100%
  .shoppingTop
    width 100%
    height 88px
    box-sizing border-box
    padding 0 30px
    background #ffffff
    display flex
    justify-content space-between
    align-items center
    .cartTitle
      font-size 36px
    .getTicket
      font-size 30px
      color #dd1a21
      width 90px
      height 88px
      line-height 88px
  .service
    width 100%
    height 70px
    box-sizing border-box
    padding 0 30px
    background #eee
    .serviceUl
      width 100%
      height 100%
      display flex
      justify-content space-between
      align-items center
      .serviceLi
        height 36px
        line-height 36px
        display flex
        align-items center
        i 
          width 10px
          height 10px
          border 1px solid #666
          box-sizing border-box
          display block
          border-radius 5px
          margin-right 6px
  .notLogin
    width 100%
    // text-align center
    .empty-img_text
      width 100%
      margin 0 200px
      height 300px
      .img
        width 248px
        height 248px
        img 
          width 100%
          height 100%
</style>

