import {request} from './request';

export function getdetaildata(iid){
    return request({
         url: "/detail",
         params:{
            iid
         }
     })
 }

//  价格标题销量 提取
 export class Goods{
     constructor(itemInfo,columuns,skuInfo){
        this.title = itemInfo.title;
        this.discountDesc = itemInfo.discountDesc ;
        this.lowPrice = itemInfo.highPrice;
        this.lowNowPrice = skuInfo.defaultPrice;
        this.columuns = columuns;
     }
 }

//  发货信息
export class gtdeliverys{
    constructor(extra,services,promotions){
        this.extra = extra;
        this.services = services
        this.promotions = promotions
     }
}


// 详情图片 跟尺寸
export class getdetailsdata{
    constructor(itemParams,detailInfo){
        this.rule = itemParams.rule ;
        this.detailInfo = detailInfo
     }
}