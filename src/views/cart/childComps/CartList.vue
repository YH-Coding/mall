<template>
  <scroll class="cart-list" v-if="cartList.length !== 0">
    <div>
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Scroll,
    CartListItem
  }
}
</script>

<style scoped>
</style>