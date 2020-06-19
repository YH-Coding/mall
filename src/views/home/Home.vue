<template>
<div id="home">
    <!-- <h2>首页</h2> -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
</div>
</template>

<script>
import {getHomeMultidata} from 'network/home'
import NavBar from 'components/common/navbar/NavBar'
export default {
name: 'Home',
components: {
    NavBar
},
data() {
return {
    banners: [],
    recommends: []
};
},
methods: {

},
created() {
    // 1.请求多个数据
    getHomeMultidata().then(res=>{
        console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log(this.banners)
        console.log(this.recommends)
    })
}
}
</script>

<style scoped>
.home-nav {
    background: var(--color-tint);
    color: #fff;
}
</style>