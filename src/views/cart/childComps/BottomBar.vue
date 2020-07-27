<template>
  <div class="bottom-menu">
    <check-button class="select-all" @checkButtonClick="checkButtonClick" :checked="isSelectAll" />
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click="calculate">去计算({{selectCount}})</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

import { mapGetters } from 'vuex'

export default {
  name: "BottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartCount','cartList']),
    totalPrice() {
      return this.cartList.filter(item => item.checked).reduce((preValue, item) => preValue + item.count * item.newPrice, 0).toFixed(2)
    },
    isSelectAll() {
      return this.cartList.length > 0 && this.cartList.find(item => !item.checked) === undefined
    },
    selectCount() {
      return this.cartList.filter(item => item.checked).reduce((preValue, item) => preValue + item.count
      , 0)
    }
  },
  methods: {
    checkButtonClick() {
      // 1.判断是否有未选中按钮
      let isSelectAll = this.cartList.find(item => !item.checked)

      // 2.有未选中的内容, 则全部选中
      if (isSelectAll) {
        this.cartList.forEach(item => item.checked = true)
      } else {
        this.cartList.forEach(item => item.checked = false)
      }
    },
    calculate() {
      if (this.selectCount === 0) {
        this.$toast.show('你还未选择商品!请先选择商品再结算!')
      }
    }
  }
};
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eeeeee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666666;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #ffffff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>