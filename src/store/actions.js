import {
  ADD_COUNTER,
  ADD_TO_CART,
} from './mutations-type'


const actions = {
  addCart(context, payload) {
    // console.log(info)
    return new Promise(resolve => {
      // 1.查看是否添加过
      const oldInfo = context.state.cartList.find(item => item.iid === payload.iid)

      // 2.+1或者新增
      if (oldInfo) {
        context.commit(ADD_COUNTER, oldInfo)
        resolve('商品已存在, 当前购买数量为:' + oldInfo.count)
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve('商品已成功添加到购物车!')
      }
    })
  }
}

export default actions