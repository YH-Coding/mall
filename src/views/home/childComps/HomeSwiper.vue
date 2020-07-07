<template>
<swiper ref='swiper' v-if="banners.length">
    <swiper-item v-for="(item,index) in banners" :key="index">
        <img :src="item.image" alt="">
    </swiper-item>
</swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
name: '',
props: {
    banners: {
        type: Array,
        default: []
    }
},
components: {Swiper,SwiperItem},
data() {
return {

};
},
methods: {

},
}
</script>

<style scoped>
</style>