import {request} from './request';

export function gethomemultiadata(){
   return request({
        url: "home/multidata",
    })
}

export function gethomemugooddata(type,page){
    return request({
         url: "home/data",
         params:{
            type,page
         }
     })
 }