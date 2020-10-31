import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-types'

export default{
    shoppingCarts(context,payload){
        let oldProduct = context.state.shoppingCartList.find(item=> item.stockId === payload.stockId)
        if(oldProduct){
            // oldProduct.number  += payload.number;
            context.commit(ADD_COUNTER,{payload,oldProduct})
        }else{
            context.commit(ADD_TO_CART,payload)
        }
        localStorage.setItem('shoppingCartList',JSON.stringify(context.state.shoppingCartList));
    }        
}