import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import waterfall from "vue-waterfall2";
Vue.config.productionTip = false
Vue.use(waterfall);
new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router,
  store
})
