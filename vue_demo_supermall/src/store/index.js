import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import mutations from './mutations'
import actions from './actions'

const  state = {
    shoppingCartList:[],
    isLogin:false
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters: {
        // 数量
        shoppingCartLength(state){
            return state.shoppingCartList.length
        },
        // 
        shoppingCart(state){
            return state.shoppingCartList
        }
    }
})
