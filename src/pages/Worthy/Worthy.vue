<template>
  <div id="Container">
    <div class="worthyContainer">
    <div class="worthyUpper">
      <span class="iconfont iconTemp-3 home"></span>
      <div class="wortyTitle">值得买</div>
      <div class="worthyUpperRight">
          <span class="worthySearch iconfont iconfangdajing"></span>
          <span class="worthyShoppingCar iconfont icongouwuche"></span>
      </div>
    </div>
    <div class="m-swiperContainer">
      <div class="swiperTop">
        <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <div class="text">严选好物&nbsp;用心生活</div>
      </div>
      <div class="swiperBottom" v-if="worthyNavData">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-item" v-for="(item, index) in navData" :key="index">
              <div class="firstItem" v-for="(list, index) in item" :key="index">
                <img :src="list.picUrl" alt="">
                <div class="itemBottom">
                  <div class="sub-title">{{list.mainTitle}}</div>
                  <span>{{list.viceTitle}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination">
            <span class="swiper-pagination-bullet"></span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div class="waterFallContainer">
    <div class="waterFallList">
      
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import {mapState} from 'vuex'
import _ from 'lodash'
  export default {
    data(){
      return{
        navData:[]
      }
    },
    mounted(){
      this.$store.dispatch('getWorthNavData')
      
      this.$nextTick(()=>{
        this.splitArray()
      })
    },
    computed:{
      ...mapState({
        worthyNavData:state=>state.worthyNav.navList
      })
    },
    methods:{
      splitArray(){
        // 轮播图中的数据
        if(this.worthyNavData){
          let splitArr = _.chunk(this.worthyNavData,this.worthyNavData.length/2)
          let splitResult = []
          //[[1,2,3],[4,5,6]]==>[[[1],[2],[3]],[[4],[5],[6]]]
          for (let i = 0; i < splitArr.length; i++) {
            splitResult.push(_.chunk(splitArr[i],1))
          }
          let result = []

          for (let i = 0; i < splitResult[0].length; i++) {
            // [1,4] [2,5] [3,6]依次push到result中
           result.push(splitResult[0][i].concat(splitResult[1][i]))
          }  
          this.navData = result
        }
      }
    },
    watch:{
      worthyNavData(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            slidesPerView: "auto",
            pagination:{
              el:'.swiper-pagination',
              bulletClass : 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }
          });
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
#Container
  width 100%
  .worthyContainer
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
    .m-swiperContainer
      padding-top 100px
      width 100%
      height 685px
      // background red
      // position relative
      .swiperTop
        width 100%
        height 524px
        background-image url('https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png')
        background-repeat no-repeat
        background-size cover
        position relative
        img
          position absolute
          left 12px
          top 60px 
          width 128px
          height 68px
        .text
          height 44px
          font-size 30px
          color #fff
          position absolute
          top 79px
          left 146px
      .swiperBottom
        width 710px
        margin 0 20px
        height 540px
        background #fff
        position absolute
        bottom 0
        left 0
        border-radius 20px
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-item
              width 177px
              height 540px
              padding 8px 6px 6px
              box-sizing border-box
              .firstItem
                width 168px
                height 201px
                display flex
                margin-top 28px
                flex-direction column
                align-items center
                img  
                  width 120px
                  height 120px
                .itemBottom
                  width 168px
                  height 201px
                  text-align center
                  margin-top 8px
                  .sub-title
                    font-size 28px
                    color #333
                    height 40px
                    font-weight bold
                    line-height 40px
                  span 
                    display block
                    height 30px
                    line-height 30px
                    margin-top 2px
                    color #999
      /deep/.swiper-pagination
              margin-bottom 15px
              .swiper-pagination-bullet
                width 40px
                height 4px
                margin 0
                &.swiper-pagination-bullet-active
                  background #DD1A21
  .waterFallContainer
    .waterFallList
      margin 30px 20px 0 20px
      height 200px
      background red

 
</style>
