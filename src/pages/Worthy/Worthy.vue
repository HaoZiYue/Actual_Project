<template>
  <div id="worthyContainer">
    <div class="worthyUpper">
      <span class="iconfont iconTemp-3 home"></span>
      <div class="wortyTitle">值得买</div>
      <div class="worthyUpperRight">
          <span class="worthySearch iconfont iconfangdajing"></span>
          <span class="worthyShoppingCar iconfont icongouwuche"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus">
#worthyContainer
  width 100%
  position relative
  .worthyUpper
    height 100px
    width 100%
    box-sizing border-box
    border-bottom 1px solid #333
    padding 0 26px 0 24px
    background #ffffff
    position fixed 
    top 0
    left 0
    display flex
    justify-content space-between
    align-items center
    font-size 36px
    .home
      font-size 46px
    .worthyUpperRight
      height 100%
      display flex
      align-items center
      .worthySearch
        font-size 46px
        margin-right 30px
      .worthyShoppingCar
        font-size 46px

 
</style>
