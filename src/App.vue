<template>
  <div class="appContainer">
    <router-view></router-view>
    <FooterGuide v-show="isShow"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    components:{FooterGuide},
    computed:{
      isShow(){
        return (this.$route.path !== '/search' && this.$route.path !== '/personal')
      }
    }


  }
</script>

<style scoped lang="stylus">
 
</style>
