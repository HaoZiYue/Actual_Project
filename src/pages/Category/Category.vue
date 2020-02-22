<template>
  <div id="categoryContainer">
    <!-- 头部搜索 -->
    <div class="headerSearch">
      <div class="inputContainer" @click="$router.push('/search')">
        <span class="iconfont iconfangdajing"></span>
        <input type="text" placeholder="搜索商品，共20267款好物">
      </div>
    </div>
    <!-- 分类列表 -->
    <div class="cateContainer">
      <!-- 左侧分类列表 -->
      <div class="cateListLeft" v-if="cateListData.categoryL1List">
        <ul class="navList" ref="navList">
          <li @click="isActive" :class="{active:indexNum === index}" v-for="(item, index) in cateListData.categoryL1List" :key="index">
            <router-link :to="`/category/cateList?cateListID=${item.id}&imgUrl=${item.bannerUrl}`" class="li" :class="{activeFont:indexNum === index}">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <!-- 右侧详情列表 -->
      <div class="cateListRight">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        tops:[],
        indexNum:0
      }
    },
    mounted(){
      this.$store.dispatch('getCategoryListData');
      let indexNum = JSON.parse(sessionStorage.getItem('index')) *1
      window.addEventListener('unload',()=>{
        sessionStorage.setItem('index',JSON.stringify(this.indexNum));
      })
      if(indexNum){
          this.indexNum = indexNum
        }else{
          this.indexNum = 0
        }
      
      
    },
    computed:{
      ...mapState({
        cateListData:state=>state.cateListData,
      })
    },
    methods:{
      _initTop(){
          let list = Array.from(this.$refs.navList.children)
          let top = []
          for (let i = 0; i < list.length; i++) {
            top.push(list[i].offsetTop)
          }
          top.push(top[top.length-1] + 45)
          this.tops = top
      },
      isActive(event){
        // console.log(event)
        let tops = this.tops;
        for (let i = 0; i < tops.length; i++) {
          // const element = array[i];
          if(event.clientY >= tops[i] && event.clientY <= tops[i+1]){
            // console.log(i)
            this.indexNum = i;
            break
          }
          
        }
      }
    },
    watch:{
        cateListData(){
          this.$nextTick(()=>{
            this._initTop()
          })
        }
    }
  }
</script>

<style scoped lang="stylus">
  #categoryContainer
    // display flex
    // flex-direction column
    // justify-content space-between
    position relative
    .headerSearch
      height 88px
      padding 0 30px
      width 100%
      box-sizing border-box
      z-index 10
      background #fff
      position absolute
      top 0
      left 0
      .inputContainer
        height 56px
        background #EDEDED
        transform translateY(16px)
        display flex
        justify-content center
        align-items center
        align-items center
        line-height 56px
        border-radius 10px
        // box-sizing border-box
        // border-bottom 1px solid #ededed
        input 
          // width 317px
          height 42px
          margin-left 10px
          color #666
          background #EDEDED
          font-size 28px
    .cateContainer
      height 1148px
      // background #fff
      display flex
      padding-top 88px
      justify-content space-between
      .cateListLeft
        width 162px
        height 100%
        background #fff
        box-sizing border-box
        padding 40px 0
        .navList
          li
            width 162px
            height 50px
            display block
            font-size 28px
            margin-bottom 40px
            position relative
            line-height 50px
            text-align center
            position relative
            &.active:after
              content ''
              width 6px
              height 50px
              background #ab2b2b
              position absolute
              left 0
              top 0
            .li
              color #333
              &.activeFont
                color #ab2b2b
      .cateListRight
        width 588px
        height 100%
        background #fff
</style>
