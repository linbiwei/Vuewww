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
        ]
    },
    {
        path: '/about',
        component: About
    },
    //  动态路由
    // user_id 可以被获取
    {
        path: '/user/:user_id',
        component: User
    },
    { path: '/profile', component:Profile  }
]
const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    // histort 模式装换
    mode: 'history',
    // 更改默认选中class
    linkActiveClass: 'active'
})

// 3.将 router 对象传入到 vue 实力
export default router

//  4  main.js 导入 router