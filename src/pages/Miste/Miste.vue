<template>
  <div id="miateContainer">
    <!-- 头部logo和搜索 -->
    <div class="misteHeader">
      <div class="logo" @click="$router.go('/miste')"></div>
      <div class="inputContainer" @click="$router.push('/search')">
        <i class="iconfont iconfangdajing"></i>
        <input type="text" class="input" placeholder="搜索商品，共20267款好物">
      </div>
      <div class="login">登录</div>
    </div>
    <!-- 滚动导航 -->
    <div class="misteNav">
      <div class="leftNav">
          <div class="content">
            <router-link to="/miste/recommend" class="active recommend">推荐</router-link>
            <div class="recommend" @click="getIndex" v-for="(item, index) in scrollNav" :key="index">{{item.name}}</div>
          </div>
      </div>
      <div class="showAll">
        <span class="iconfont iconarrow-down"></span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
import Recommend from '../../components/Recommend/Recommend';
import {mapState} from 'vuex'
  export default {
    components:{
      Recommend
    },
    mounted(){
      
      //发送请求拿滚动导航的数据
      this.$store.dispatch('getScrollNavList');
      //发送请求获取首页的信息
      this.$store.dispatch('getIndexData')
    },
    computed:{
        ...mapState({
          scrollNav:state=>state.scrollNav
        })
    },
    methods:{
      getIndex(event){
        console.log(event)
      }
    },
    watch:{
      //等到数据来了再去new betterscroll
      scrollNav(){
          this.$nextTick(() => {
            this.scroll = new BScroll('.leftNav', {
              scrollX: true,
              click:true
            })
          });
        }
    }
    
  }
</script>

<style scoped lang="stylus">
  #miateContainer
    width 100%
    box-sizing border-box
    position absolute
    .misteHeader
      background #fff
      height 88px
      width 100%
      z-index 10
      display flex
      box-sizing border-box
      justify-content space-between
      align-items center
      padding 16px 30px
      position fixed
      top 0
      left 0
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
    .misteNav
      height 60px
      width 100%
      position fixed
      top 88px
      left 0
      background #fff
      padding-left 30px
      z-index 10
      .leftNav
        height 60px
        width 80%
        overflow hidden
        display flex
        .content
          display flex
          height 60px
          .recommend
            height 100%
            line-height 60px
            white-space nowrap
            padding  0 16px
            text-align center
            box-sizing border-box
            margin-right 14px
            color #333
            font-size 28px

            &.active
              color #dd1a21
              border-bottom 4px solid #dd1a21
      .showAll
        width 100px
        height 60px
        position absolute
        right 20px
        top 0px
        line-height 60px
        span 
          margin-left 20px
          font-size 30px  
          font-weight bold
          color #aaa
        
            


</style>
