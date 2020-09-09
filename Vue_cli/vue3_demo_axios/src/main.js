import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// //  ======= 全局配置  =======   

// //  抽取连接开头公共部分连接
// axios.defaults.baseURL = 'http://123.207.32.32:8000/api/x6/'
// // 请求超时定义
// axios.defaults.timeout = 5555

// //  =======   基本使用 =======   
// axios({
//   // 连接
//   //  完整连接  'http://123.207.32.32:8000/api/x6/home/data'
//   url: 'home/data',
//   //传输类型
//   method: 'get',
//   // 连接拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log('基本使用')
//   console.log(res)
// })

// // =======   1. 并发请求   =======
// axios.all([
//   axios({
//     url: 'home/data',
//     params: {
//       type: 'pop',
//       page: 1
//     }
//   }),
//   axios({
//     url: 'home/data',
//     params: {
//       type: 'pop',
//       page: 12
//     }
//   }),
// ])
// // ---- 1.1 拿到是一个数组
// // .then(results => {
// //   console.log(results);
// // })
// // ---- 1.2 拿到是两个展开的数据
// .then(axios.spread((a,b) => {
//   console.log('并发请求')
//   console.log(a);
//   console.log(b);
// })) 


// // =======  创建对应的axios 实例   =======

// // 实例 1 每个实例都有独立的配置
// // 独立的 baseURL timeout
// const instiance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000/api/x6/',
//   timeout:5000
// })

// // 使用定义的 axios 实例 
// instiance1({
//   url:'home/multidata'
// }).then(a =>{
//     console.log('axios 实例 ')
//   console.log(a);
// })

