<template>
  <div id="recomemdContainer">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in indexData.focusList" :key="index">
            <img :src="item.picUrl" alt="">
          </div>
        </div>
        <div class="swiper-pagination">
          <span class="swiper-pagination-bullet"></span>
        </div>
      </div>
      <!-- 平台服务 -->
      <div class="indexServiceContainer">
        <ul class="indexService">
          <li class="serviceItem" v-for="(item, index) in indexData.policyDescList" :key="index">
              <img :src="item.icon" alt="">
              <span>{{item.desc}}</span>
          </li>
        </ul>
      </div>
      <!-- 商品分类列表 -->
      <div class="shopListContainer" v-if="indexData.kingKongModule">
        <ul class="shopList">
          <li class="listItem" v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="index">
            <img :src="item.picUrl" alt="">
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>
      <!-- 大促销模块 -->
      <div class="bigPromotionModule" v-if="indexData.bigPromotionModule">
          <div class="promotionTop">
            <img class="img" :src="indexData.bigPromotionModule.floorList[0].cells[0].picUrl" alt="">
            <div class="products">
              <img src="https://yanxuan-item.nosdn.127.net/d361f2992d6c688b7480ef2397ecf3fe.png?imageView&thumbnail=168x0&quality=75" alt="">
              <div class="price">
                <span>￥19.9</span>
              </div>
            </div>
          </div>
          <div class="promotionBottom">
            <div class="firstFloor">
              <img :src="indexData.bigPromotionModule.floorList[1].cells[0].picUrl" alt="">
            </div>
            <div class="secondFloor">
                <div class="secondFloorItem" v-for="(item, index) in indexData.bigPromotionModule.floorList[2].cells" :key="index">
                    <img :src="item.picUrl" alt="">
                </div>
            </div>
            <div class="thirdFloor">
                <div class="secondFloorItem1" v-for="(itemList, i) in indexData.bigPromotionModule.floorList[3].cells" :key="i">
                    <img :src="itemList.picUrl" alt="">
                </div>
            </div>
          </div>
      </div>
      <!-- 新人专享 -->
      <div class="newComerExclusive" v-if="indexData.indexActivityModule">
        <div class="newComerTop">
          <span>新人专享礼</span>
        </div>
        <div class="newComerBottom">
          <div class="bottom-left">
            <span>新人专享礼包</span>
            <div class="imgContainer">
              <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
            </div>
          </div>
          <div class="bottom-right">
              <div class="rightModule1">
                <div class="title">{{indexData.indexActivityModule[0].title}}</div>
                <div class="subtitle">{{indexData.indexActivityModule[0].subTitle}}</div>
                <div class="img">
                  <img :src="indexData.indexActivityModule[0].picUrl" alt="">
                </div>
              </div>
              <div class="rightModule2">
                <div class="title">{{indexData.indexActivityModule[1].title}}</div>
                <span class="tag">{{indexData.indexActivityModule[1].tag}}</span>
              </div>
          </div>
        </div>
      </div>
      <!-- 类目热销榜 -->
      <div class="categoryHotSellModule" v-if="indexData.categoryHotSellModule">
          <div class="title">
            {{indexData.categoryHotSellModule.title}}
          </div>
          <div class="categoryList">
            <div class="categoryList-top">
              <div class="categoryList-top-item" :class="{active:index === 1}" v-for="(item, index) in hotSellListFirst" :key="index">
                <div class="hotSell">
                  <span>{{item.categoryName}}</span>
                </div>
                <div class="hotSell-img">
                  <img :src="item.picUrl" alt="">
                </div>
              </div>
              <!-- <div class="hotComment"></div> -->
            </div>
            <div class="categoryList-bottom">
                <div class="categoryList-bottom-item" v-for="(item, index) in remainingHotSellList" :key="index">
                    <div class="item">{{item.categoryName}}</div>
                    <div class="item-img">
                      <img :src="item.picUrl" alt="">
                    </div>
                </div>
            </div>
          </div>
      </div>
      <!-- 限时购 -->
      <div class="specialDiscount" v-if="indexData.flashSaleModule">
        <div class="specialDiscountTitle">
          <div class="title-left">
            <span>限时购</span>
            <div class="dateNow">
              <div class="date">00</div>
              <span>:</span>
              <div class="date">00</div>
              <span>:</span>
              <div class="date">00</div>
            </div>
          </div>
          <div class="title-right">
            <span>更多</span>
            <span class="iconfont iconyou ico"></span>
          </div>
        </div>
        <div class="specialDiscountList">
          <div class="list-item" v-for="(item, index) in indexData.flashSaleModule.itemList" :key="index">
            <div class="item-img">
              <img :src="item.showPicUrl" alt="">
            </div>
            <div class="price">
              <span>￥{{item.activityPrice}}</span>
              <del>￥{{item.originPrice}}</del>
            </div>
          </div>
        </div>
      </div>
      <!-- 新品首发 -->
      <div class="newItemListContainer">
        <div class="newItemListTitle">
          <div class="title">
            新品首发
          </div>
          <div class="more">
            <span class="moreText">更多</span>
            <span class="iconfont iconyou ico"></span>
          </div>
        </div>
        <div class="newItemList" v-if="indexData.newItemList">
            <ul class="newItemListUl">
              <li class="list" v-for="(item, index) in newItemListCount" :key="index">
                  <div class="list-img">
                    <img :src="item.showPicUrl" alt="">
                  </div>
                  <div class="list-des" v-if="item.extra.resource">{{item.extra.resource.materialName}}</div>
                  <div class="list-price">￥{{item.retailPrice}}</div>
                  <div class="list-tag" v-show="item.itemTagList">
                    <span v-for="(list, index) in item.itemTagList" :key="index">{{list.name}}</span>
                  </div>
              </li>
            </ul>
        </div>
      </div>
      <!-- 最后一个模块 -->
      <div class="theLastOne" v-if="indexData.sceneLightShoppingGuideModule">
        <div class="lastItem" v-for="(item, index) in indexData.sceneLightShoppingGuideModule" :key="index">
          <div class="last-title">
            {{item.styleItem.title}}
          </div>
          <div class="last-subtitle">
            {{item.styleItem.desc}}
          </div>
          <div class="last-imgList">
            <div class="lastImg" v-for="(list, index) in item.styleItem.picUrlList" :key="index">
              <img :src="list" alt="">
            </div>
            <!-- <img class="lastImg" :src="list" alt="" v-for="(list, index) in item.styleItem.picUrlList" :key="index"> -->
            <!-- <img src="" alt=""> -->
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div class="footerContainer">
        <div class="footerTop">
          <div class="downLoadApp">下载APP</div>
          <div class="PCEdition">电脑版</div>
        </div>
        <div class="footerBottom">
          <div class="copyright">
            <span>网易公司版权所有 © 1997-</span>
            <span>2020</span>
          </div>
          <div class="licenses">
              食品经营许可证：JY13301080111719
          </div>

        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {mapState} from 'vuex'
  export default {
    data(){
      return {
        // hotSellListFirst:[],
        // remainingHotSellList:[]
      }
    },
    mounted(){
      console.log(this.hotSellListFirst)
      console.log(this.remainingHotSellList)
    },
    computed:{
        ...mapState({
          indexData:state=>state.indexData
        }),
        hotSellListFirst(){
          if(this.indexData.categoryHotSellModule){
            return this.indexData.categoryHotSellModule.categoryList.slice(0,2)
          }
        },
        remainingHotSellList(){
          if(this.indexData.categoryHotSellModule){
            return this.indexData.categoryHotSellModule.categoryList.filter((item,index)=>{
                return index >1
            })
          }
        },
        newItemListCount(){
          if(this.indexData.newItemList){
            return this.indexData.newItemList.filter((item,index)=>{
              return index < 6
            })
          }
        }
    },
    watch:{
      indexData(){
          this.$nextTick(()=>{
            new Swiper('.swiper-container', {
              autoplay: true,//可选选项，自动滑动
              loop:true,//无缝滚动
              pagination: {
                el: '.swiper-pagination'
              },
            })
        })
      }
    }

  }
</script>

<style scoped lang="stylus">
#recomemdContainer
  padding-top 148px
  // 轮播图
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 370px
        img 
          width 100%
          height 100%
/deep/.swiper-pagination
        position absolute
        bottom 30px
        .swiper-pagination-bullet
          width 40px
          height 4px
          background #fff
          border-radius 0
   // 服务
  .indexServiceContainer
    width 100%
    height 72px
    background #fff
    .indexService
      padding 0 30px
      height 100%
      display flex
      justify-content space-between
      align-items center
      .serviceItem
        flex 1
        img 
          width 32px
          height 32px   
          vertical-align middle
        span 
          margin-left 8px    
          vertical-align middle
  // 商品分类
  .shopListContainer
    width 100%
    height 372px
    background #fff
    .shopList
      width 100%
      box-sizing border-box
      height 100%
      padding-bottom 32px
      display flex
      flex-wrap wrap
      .listItem
        width 110px
        height 156px
        margin 10px 20px 9px
        img
          width 110px
          height 110px
        span 
          color #333
          display block
          text-align center
          font-size 24px
          margin-top 10px
  // 大促销模块
  .bigPromotionModule
    width 100%
    height 828px
    background-color #1674e3
    .promotionTop
      width 100%
      height 240px
      position relative
      .img
        width 100%
        height 100%
      .products 
        width 168px
        height 168px
        // box-sizing border-box
        // border 1px solid red
        position absolute
        left 74px
        top 32px
        img 
          width 100%
          height 100%
        .price
          width 152px
          height 32px
          background #f48f18
          position absolute
          left 8px
          bottom 8px
          border-radius 16px
          text-align center
          line-height 32px
          font-size 20px
          color #fff
          font-weight bold 
    .promotionBottom
      // width 100%
      height 588px
      box-sizing border-box
      padding 20px 20px
      .firstFloor
        height 160px
        width 100%
        box-sizing border-box
        border-radius 10px
        img 
          width 100%
          height 100%
      .secondFloor
        margin-top 8px
        width 100%
        display flex
        // flex-wrap wrap
        justify-content space-between
        .secondFloorItem
          width 351px
          height 186px
          background pink
          margin-bottom 8px
          border-radius 10px
          img
            width 100%
            height 100%
      .thirdFloor
        width 100%
        display flex
        justify-content space-between
        .secondFloorItem1
          width 351px
          height 186px
          background pink
          margin-bottom 8px
          border-radius 10px
          img
            width 100%
            height 100%
  // 新人专享礼
  .newComerExclusive
    width 100%
    height 558px
    margin-top 20px
    margin-bottom 20px
    background #fff
    box-sizing border-box
    padding 0 30px 
    .newComerTop
      height 90px
      line-height 90px
      text-align center
      font-size 32px
      color #333
      span 
        position relative
        &::before
          content ''
          display block
          position absolute
          top 50%
          left -40px
          width 24px
          height 3px
          background #333
        &::after
          content ''
          display block
          position absolute
          top 50%
          right -40px
          width 24px
          height 3px
          background #333
    .newComerBottom
      display flex
      justify-content space-between
      .bottom-left
        width 343px
        height 434px
        background #F9E9CF
        box-sizing border-box
        span
          display block
          padding 30px 0 0 30px
          font-size 32px
          color #333
        .imgContainer
          width 258px
          height 257px
          margin 37px 43px
          img 
            width 100%
            height 100%
      .bottom-right
        width 343px
        // background red  
        display flex
        flex-direction column
        justify-content space-between
        .rightModule1
          width 100%
          height 215px
          background #FBE2D3
          box-sizing border-box
          padding 20px 0 0 30px
          position relative
          .title
            font-size 32px
            height 48px
          .subtitle
            font-size 24px
            height 36px
            color #7f7f7f
          .img 
            width 200px
            height 200px
            position absolute 
            right 0
            bottom 0
            img
              width 100%
              height 100%
        .rightModule2
          width 100%
          height 215px
          background #FFECC2
          box-sizing border-box
          padding 20px 0 0 30px
          .title
            font-size 32px
            height 48px
          .tag
            line-height 32px
            padding 0 10px
            box-sizing border-box
            background #CBB693
            border-radius 10px
            font-size 22px
            color #fff
  // 类目热销榜
  .categoryHotSellModule
    height 710px
    background #fff
    .title
      height 100px
      line-height 100px
      font-size 32px
      color #333
      box-sizing border-box
      padding 0 30px
    .categoryList
      height 610px
      box-sizing border-box
      padding 0 20px 20px 30px
      .categoryList-top
        display flex
        .categoryList-top-item
          width 340px
          height 200px
          position relative
          margin-right 10px
          margin-bottom 10px
          background #F9F3E4
          border-radius 4px
          &.active
            background #EBEFF6
          .hotSell
            margin-top 66px
            font-size 28px
            padding-left 24px
            span
              position relative
              &:after
                content ''
                display block
                position absolute
                left 0
                bottom -15px
                width 48px
                height 4px
                background #333
          .hotSell-img
            width 200px
            height 200px
            position absolute
            top 0
            right 0
            img 
              width 100%
              height 100%
      .categoryList-bottom
        display flex
        flex-wrap wrap
        .categoryList-bottom-item
          width 165px
          height 180px
          margin 0 10px 10px 0
          background #F5F5F5
          border-radius 4px
          .item
            margin-top 10px
            height 36px
            line-heigth 36px
            font-size 24px
            color #333
            text-align center
          .item-img
            width 120px
            height 120px
            margin-left 23px
            margin-top 2px
            img 
              width 100%
              height 100%
  // 限时购
  .specialDiscount
    height 700px
    background #fff
    margin-top 20px
    .specialDiscountTitle
      height 100px
      padding 0 30px
      display flex
      justify-content space-between
      align-items center
      .title-left
        display flex
        align-items center
        span
          font-size 32px
          color #333
        .dateNow
          margin-left 12px
          height 100%
          display flex
          align-items center
          .date
            width 36px
            height 36px
            background #333
            color #fff
            margin 0 10px
            font-size 24px
            border-radius 5px
            text-align center
            line-height 36px
      .title-right 
        font-size 28px
        .ico
          margin-left 8px
          font-size 24px
          color #aaa
    .specialDiscountList
      height 600px
      padding 0 10px 0 30px
      display flex
      flex-wrap wrap
      .list-item
        width 216px
        height 300px
        box-sizing border-box
        padding-bottom 30px
        margin-right 20px
        .item-img
          width 216px
          height 216px
          background #F5F5F5
          margin-bottom 12px
          img 
            width 100%
            height 100%
        .price
          padding-left 20px
          height 42px
          span
            font-size 28px
            color #DD1A21
            margin-right 12px
          del
            font-size 24px
            color #7F7F7F
  // 新品首发
  .newItemListContainer
    height 922px
    background #fff
    margin 20px 0
    .newItemListTitle
      height 100px
      padding 0 30px
      display flex
      justify-content space-between
      line-height 100px
      .title
        font-size 32px
      .more
        .moreText
          font-size 28px
        .ico
          font-size 24px
          margin-left 8px
          color #aaa
    .newItemList
      height 796px
      box-sizing border-box
      padding-left 10px
      .newItemListUl
        display flex
        flex-wrap wrap
        .list
          height 398px
          width 216px
          box-sizing border-box
          margin-left 20px
          padding-bottom 13px
          .list-img
            width 216px
            height 216px
            background #F5F5F5
            margin-bottom 12px
            img 
              width 100%
              height 100%
          .list-des
            height 72px
            line-height 36px
            -webkit-line-clamp 2    /*用来限制在一个块元素显示的文本的行数*/
            display -webkit-box    /*必须结合的属性，将对象作为弹性伸缩盒子模型显示*/
            -webkit-box-orient vertical    /*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式*/
            overflow hidden
            word-break break-all
          .list-price
            height 48px
            line-height 48px
            font-size 32px
            color #dd1a21
          .list-tag
            height 33px
            line-height 33px
            span
              height 28px
              padding 0 8px
              box-sizing border-box
              border 1px solid #dd1a21
              font-size 16px
              color #dd1a21
              text-align center
              border-radius 15px
              margin-right 8px
  // 最后一个模块
  .theLastOne 
    height 576px
    background #fff
    box-sizing border-box 
    display flex
    flex-wrap wrap
    padding 10px 30px 30px 26px         
    .lastItem
      width 343px
      height 264px
      background #F5F5F5   
      box-sizing border-box 
      padding 20px 0 0 20px
      margin 4px 0 0 4px  
      border-radius 12px
      .last-title
        height 48px
        padding-left 10px
        font-size 32px
      .last-subtitle
        height 36px
        padding-left 10px
        font-size 24px
        color #7f7f7f
      .last-imgList
        height 150px
        margin-right 4px
        display flex
        .lastImg
          width 100%
          height 100%
          img 
            width 100%
            height 100%
  // 底部
  .footerContainer
    margin-top 20px
    height 244px
    background #414141
    box-sizing border-box
    padding 54px 20px 28px
    .footerTop
      height 62px
      display flex
      justify-content center
      margin-bottom 36px
      div
        width 172px
        height 62px
        box-sizing border-box
        border 1px solid #999
        text-align center
        line-height 62px
        color #fff
        &.downLoadApp
          margin-right 50px
    .footerBottom
      height 64px
      .copyright
        text-align center
        line-height 35px
        span
          color #999
      .licenses
        text-align center
        line-height 35px
        color #999
</style>
