// vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 1.装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    //保存数据 
    state:{
        msg:100,
        students:[
            {id:1,name:'一',age:18},
            {id:2,name:'二',age:20},
            {id:3,name:'三',age:22}
        ]
    },
    // 方法
    mutations:{
        // 函数带 参数state、
        statejia(state){
            state.msg++
        },
        statejian(state){
            state.msg--
        },
        statennnn(state,a){
            state.msg+=a
        }
    },
    // 类似计算属性
    getters: {
        square(state){
            return  state.msg * state.msg
        },
        more(state){
            return state.students.filter(s => s.age >=20 )
        },
        // state,getters
        moerlen(state,getters){
            return getters.more.length
        },
        moeragestu(state){
            // return function(age){
            //     return state.students.filter(s => s.age >=age )
            // }
            return age => {
                return state.students.filter(s => s.age >=age )
            }
        }
    },
    // 异步操作 网络请求
    actions: {},
    modules: {}
})

// 导出store 对象
export default store