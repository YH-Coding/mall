import {
  ADD_COUNTER,
  ADD_TO_CART,
} from './mutations-type'

const mutations = {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.count = 1
    payload.checked = true
    state.cartList.push(payload)
  },
  // addCart(state, info) {
  //   console.log(info)
  //   // 1.查看是否添加过
  //   const oldInfo = state.cartList.find(item => item.iid === info.iid)

  //   // 2.+1或者新增
  //   if (oldInfo) {
  //     oldInfo.count++
  //   } else {
  //     info.count = 1
  //     info.checked = true
  //     state.cartList.push(info)
  //   }
  // }
}

export default mutations