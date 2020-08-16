import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Cart = () => import('../views/cart/cart.vue')
const Profile = () => import('../views/profile/profile.vue')
// 安装创建
Vue.use(VueRouter)

// 2.创建路由对象
const router = new VueRouter({
    routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/category",
      component: Category,
    },
    {
      path: "/cart",
      component: Cart,
    },
    {
      path: "/profile",
      component: Profile,
    },
  ],
  // histort 模式装换
  mode: "history",
  // 更改默认选中class
  linkActiveClass: "active",
});


// 3.导出router
export default router