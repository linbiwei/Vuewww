import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('views/home/home.vue')
const Category = () => import('views/category/category.vue')
const Cart = () => import('views/cart/cart.vue')
const Profile = () => import('views/profile/profile.vue')
const ProfileSetthe = () => import('views/profile/Setthe.vue')
const Seek = () => import('views/Seek/Seek.vue')
const Detail = () => import('views/detail/detail.vue')
const LogRegister = () => import('views/logRegister/login.vue')
// 安装创建
Vue.use(VueRouter)

// 2.创建路由对象
const router = new VueRouter({
  routes: [{
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      meta: {
        box: true,
        keepAlive: true,
        scrollTop: 0,
        isLogin: false
      }
    },
    {
      path: "/category",
      component: Category,
      meta: {
        isLogin: false
      }
    },
    {
      path: "/cart",
      component: Cart,
      meta: {
        isLogin: false
      }
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/profile/Setthe",
      component: ProfileSetthe,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/Seek",
      component: Seek,
      meta: {
        isLogin: false
      }
    },
    {
      path: "/Detail",
      component: Detail,
      meta: {
        isLogin: false
      }
    },
    {
      path: "/Login",
      component: LogRegister,
      meta: {
        isLogin: false
      }
    }
  ],
  // histort 模式装换
  mode: "history",
  // 更改默认选中class
  linkActiveClass: "active",
});

// 路由前置钩子 跳转前
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('Flag') == 'isLogin') {
    next()
  } else {
    if (to.meta.isLogin) {
      next({
        path: '/Login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    } else {
      next()
    }
  }
});
// // 后置钩子  跳转后
// router.afterEach( route => {

//   }
// })




// 3.导出router
export default router