import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router,
  store
})
