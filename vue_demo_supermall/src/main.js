import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import store from './store'   //导入store
// rem 淘宝自适应js
import 'lib-flexible/flexible.js'
//  normalize css 初始化代码
// import 'normalize.css/normalize.css'

// 弹窗
// this.Prompt 引用
import Prompt from 'assets/js/wu_ui'; 
Vue.prototype.Prompt = Prompt;

// 减少移动端300ms 延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)
// 

new Vue({
  render: h => h(App),
  router,
  store 
}).$mount('#app')

// 图片预加载

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    preLoad: 1.3,// 距离可视区加载
    error:require('../src/assets/img/loading.jpg'), // 错误图片
    loading:require('../src/assets/img/loading.jpg') // 预加载图片
})

// 判断登录状态 同步保存本地的购物车数据
if(localStorage.getItem('Flag') == 'isLogin'){
  if(JSON.parse(localStorage.getItem('shoppingCartList')) !=null){
    store.state.shoppingCartList  = JSON.parse(localStorage.getItem('shoppingCartList'))
  }
}

