const actions = {
  addCart(context, payload) {
    // console.log(info)
    // 1.查看是否添加过
    const oldInfo = context.state.cartList.find(item => item.iid === payload.iid)

    // 2.+1或者新增
    if (oldInfo) {
      context.commit('addCounter', payload)
    } else {
      context.commit('addToCart', payload)
      // info.count = 1
      // info.checked = true
      // state.cartList.push(info)
    }
  }
}

export default actions