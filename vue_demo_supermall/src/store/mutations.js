import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-types'

export default{
    [ADD_COUNTER](state,data){
        data.oldProduct.number  += data.payload.number;
    },
    [ADD_TO_CART](state,payload){
        payload.IfTheSelected = true
        state.shoppingCartList.push(payload)
        
         
    }      
}