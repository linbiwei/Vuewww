// 配置路由相关信息

import VueRouter from 'vue-router'
import Vue from 'vue'

// 导入两个跳转页面
// import Home from '../components/hone.vue'
// import About from '../components/about.vue'
// import User from '../components/user.vue'

// 路由懒加载写法  打包回不一样 跟原有js 区分开
const Home = () => import('../components/hone.vue');
const Homenews = () => import('../components/homenews.vue');
const Homemsess = () => import('../components/homemsessage.vue');

const About = () => import('../components/about.vue');
const User = () => import('../components/user.vue');
const Profile = ()=>import('../components/profilie.vue')

// 1. 通过Vue.use（创建），安装
Vue.use(VueRouter)

// 2.创建路由对象
// 一个路径一个对象

const routes = [
    // 重定向默认路径
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        //  路由嵌套 
        children: [
            // 默认显示
            {
                path: '',
                redirect: 'news'
            },
            {
                path: 'news',
                component: Homenews
            },
            {
                path: 'message',
                component: Homemsess 
            },
        ],

        // 给导航守卫定的标题
        meta: { 
            title:'首页'
         }
    },
    {
        path: '/about',
        component: About,
        meta: { 
            title:'关于'
         },
         //  路由独享守卫  执行这个路由跳转才触发
        beforeEach:(to, from, next) => {
            console.log('路由独享守卫')
            next()
        }
    },
    //  动态路由
    // user_id 可以被获取
    {
        path: '/user/:user_id',
        component: User,
        meta: { 
            title:'用户'
         }
    },
    {
        path: '/profile',
        component:Profile,
        meta: { 
            title:'档案'
         },
        
    }
]
const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    // histort 模式装换
    mode: 'history',
    // 更改默认选中class
    linkActiveClass: 'active'
})


// 导航守卫更改  document.title

// 前置狗子  跳转前
router.beforeEach((to, from, next) => {
    console.log(' 前置狗子  跳转前')
    // 存在嵌套路由 就要用 to.matched[0]
    document.title= to.matched[0].meta.title
    next()
})

// 后置钩子  跳转后
router.afterEach( route => {
    console.log('后置钩子 跳转后')
})







// 3.将 router 对象传入到 vue 实力
export default router

//  4  main.js 导入 router