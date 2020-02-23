<template>
  <div id="BScrollContainer">
    <div class="CateListDataContainer">
      <div class="header-img">
        <img :src="imgUrl" alt="">
      </div>
      <div class="imgListContainer" v-if="cateRightData">
        <ul class="imgUl" v-show="cateRightData.categoryList">
          <li class="imgList" v-for="(item, index) in cateRightData.categoryList" :key="index">
            <div class="img">
              <img :src="item.bannerUrl" alt="">
            </div>
            <span>{{item.name}}</span>
          </li>
        </ul>
        <div class="cateList" v-show="cateRightData.subCateList" v-for="(rightList, index) in cateRightData.subCateList" :key="index">
          <div class="title">{{rightList.title}}</div>
          <div class="rightListContainer">
              <ul class="right-list">
                <li class="rightItem" v-for="(cate, index) in rightList.list" :key="index">
                  <div class="listImg">
                    <img :src="cate.wapBannerUrl" alt="">
                  </div>
                  <span class="span">{{cate.name}}</span>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
  export default {
    data(){
      return {
        cateRightData:'',
        imgUrl:''
      }
    },
    mounted(){
      this.$store.dispatch('getCategoryRightListData')
      // window.addEventListener('load',()=>{
        this.getListData()
        let imgUrl = this.$route.query.imgUrl
        this.imgUrl = imgUrl
      // })
      
      this.$nextTick(()=>{
          this.getListData()
          // 默认显示第一图片
          if(this.$route.query.imgUrl === undefined){
           let defaultData = this.categoryL1List.find((value,index)=>{
            return value.id === this.cateRightList[0].id
           })
           this.imgUrl = defaultData.bannerUrl
            }
        })
      
      
    },
    
    computed:{
      ...mapState({
        cateRightList:state=>state.cateRightList,
        categoryL1List:state=>state.cateListData.categoryL1List
      })
    },
    methods:{
      getListData(){
        let query = this.$route.query.cateListID
        
        let cateRightData 
        if(this.cateRightList){
          cateRightData = this.cateRightList.find((value,index)=>{
            if(query === undefined){
              query = this.cateRightList[0].id.toString()
            }
            return value.id.toString() === query
          })
        }
        this.cateRightData = cateRightData
      }
    },
    watch:{
      //监听路由对象，当query参数发生变化时，会触发监听
      $route(){
        this.$nextTick(()=>{
          this.getListData();
          let imgUrl = this.$route.query.imgUrl
          this.imgUrl = imgUrl
        })
      },
      cateRightList(){
        this.$nextTick(() => {
            this.scroll = new BScroll('#BScrollContainer', {
              scrollY: true,
              click:true
            })
          });
      }
    }
  }
</script>

<style scoped lang="stylus">
#BScrollContainer
  width 100%
  height 100%
  overflow hidden
  .CateListDataContainer
    width 100%
    // height 100%
    padding 30px 30px 21px 30px
    box-sizing border-box
    .header-img
      width 528px
      height 192px
      background #eee
      margin-bottom 32px
      img 
        width 100%
        height 100%
    .imgListContainer
      width 100%
      overflow hidden
      .imgUl
        width 552px
        display flex
        flex-wrap wrap
        box-sizing border-box
        // padding-right 10px
        // justify-content space-between
        .imgList
          width 144px
          height 216px
          margin-right 34px
          .img
            width 144px
            height 144px
            img
              width 100%
              height 100%
          span
            height 72px
            display block
            line-height 36px
            font-size 24px
            color #333
            overflow hidden
            text-align center
      .cateList
        width 100%
        .title
          width 100%
          height 51px
          padding-bottom 8px
          margin-bottom 24px
          box-sizing border-box
          font-size 28px
          color #333
          // background yellow
          font-weight bold
          border-bottom 1px solid #eee
          line-height 43px
        .rightListContainer
          width 100%
          overflow hidden
          .right-list
            width 552px
            display flex
            flex-wrap wrap
            .rightItem
              width 144px
              height 216px
              margin-right 34px
              .listImg
                width 144px
                height 144px
                img 
                  width 100%
                  height 100%
              .span
                display block
                height 72px
                text-align center
                margin-top 10px

</style>
