import {request} from './request'

export function getDetail(iid) {
   return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(data) {
        const itemInfo = data.itemInfo;
        const columns = data.columns;
        const services = data.shopInfo.services

        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.nowPrice = itemInfo.highNowPrice
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}