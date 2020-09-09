// vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 1.装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    //保存数据 
    state: {
        msg: 100,
        students: [{
                id: 1,
                name: '一',
                age: 18
            },
            {
                id: 2,
                name: '二',
                age: 20
            },
            {
                id: 3,
                name: '三',
                age: 22
            }
        ],
        info: {
            id: 4,
            name: '四',
            age: 24
        }
    },
    // 方法
    mutations: {
        // 函数带 参数state、
        statejia(state) {
            state.msg++
        },
        statejian(state) {
            state.msg--
        },
        statennnn(state, a) {
            state.msg += a
        },
        inffo(state) {
            // 不能再 mutations 里进行异步操作 需要在 actions 过度
            state.info.name = 'linbiwei';

            // 响应式 可监听
            // 增加
            //    Vue.set(state.info,'abc','cbs')
            //  删除
            // Vue.delete(state.info, 'id')
        }
    },
    // 类似计算属性
    getters: {
        square(state) {
            return state.msg * state.msg
        },
        more(state) {
            return state.students.filter(s => s.age >= 20)
        },
        // state,getters
        moerlen(state, getters) {
            return getters.more.length
        },
        moeragestu(state) {
            // return function(age){
            //     return state.students.filter(s => s.age >=age )
            // }
            return age => {
                return state.students.filter(s => s.age >= age)
            }
        }
    },
    // 异步操作 :网络请求
    // 默认值 context
    actions: {
        // context类似上面的state  ,payload 是传参
        actionsinfo(context,payload){
            setTimeout(()=>{  //模拟异步操作
                //  mutations 里的异步操作 拿在这里调用
                context.commit('inffo')
                console.log(payload);
            },1000)
        }
    },
    //  可以划分更多的小单元
    // modules 里调用方法是一样的
    modules: {
        modulesA:{
            state:{
                name:'linbiwei'
            },
            actions:{

            },
            getters:{

            },
            mutations:{
                linbiwei(a,b){
                    a.name=b
                }
            }
        }
    }
})

// 导出store 对象
export default store