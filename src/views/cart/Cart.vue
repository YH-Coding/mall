<template>
<div>
    <cart-nav-bar/>
    <cart-list :cart-list="cartList"/>
    <bottom-bar/>
</div>
</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'

import { mapGetters } from 'vuex'

export default {
name: 'Cart',
components: {
    CartNavBar,
    CartList,
    BottomBar
},
data() {
return {

};
},
methods: {

},
computed: {
    ...mapGetters(['cartList'])
}
}
</script>

<style scoped>
.cart-list {
    position: absolute;
    top: 44px;
    bottom: 93px;
    width: 100%;
}
</style>