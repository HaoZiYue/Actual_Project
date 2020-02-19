<template>
  <div id="recomemdContainer">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="" alt="">
          </div>
          <div class="swiper-slide">slider2</div>
          <div class="swiper-slide">slider3</div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  export default {
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
      })
    }

  }
</script>

<style scoped lang="stylus">
#recomemdContainer
  .swiper-container
    width 100%
    height 370px
 
</style>
