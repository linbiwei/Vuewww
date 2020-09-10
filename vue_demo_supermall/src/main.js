import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

// rem 淘宝自适应js
import 'lib-flexible/flexible.js'
//  normalize css 初始化代码
// import 'normalize.css/normalize.css'


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
