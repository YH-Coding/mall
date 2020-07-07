<template>
<div class="goods-list">
    <goods-item class="goods" v-for="item in goodsList" :goods="item" :key="item.show.img"></goods-item>
</div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
name: 'GoodsList',
props: {
    goodsList: {
        type: Array,
        default: []
    }
},
components: { GoodsItem },
data() {
return {

};
},
methods: {

},
}
</script>

<style scoped>
.goods-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>