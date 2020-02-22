<template>
  <div id="CateListDataContainer">
    <div class="header-img">
      <img :src="imgUrl" alt="">
    </div>
    <div class="imgListContainer" v-if="cateRightList">
      <ul class="imgUl">
        <li class="imgList" v-for="(item, index) in cateRightData.categoryList" :key="index">
          <div class="img">
            <img :src="item.bannerUrl" alt="">
          </div>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
  export default {
    data(){
      return {
        cateRightData:'',
        imgUrl:''
      }
    },
    mounted(){
      // console.log(this.$router)
      this.$store.dispatch('getCategoryRightListData')
      // console.log(this.getListData())
      this.$nextTick(()=>{
          this.getListData()
          if(this.$route.query.imgUrl === undefined){
              this.imgUrl = "https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png"
            }
        })
      
      
    },
    computed:{
      ...mapState({
        cateRightList:state=>state.cateRightList
      })
    },
    methods:{
      getListData(){
        let query = this.$route.query.cateListID
        
        let cateRightData 
        if(this.cateRightList){
          cateRightData = this.cateRightList.find((value,index)=>{
            if(query === undefined){
              query = '11'
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
      }
    }
  }
</script>

<style scoped lang="stylus">
#CateListDataContainer
  width 100%
  height 100%
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

</style>
