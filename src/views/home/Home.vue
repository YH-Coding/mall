<template>
<div>
    <h2>首页</h2>
</div>
</template>

<script>
import {getHomeMultidata} from 'network/home'
export default {
name: 'Home',
components: {},
data() {
return {
    banners: [],
    recommends: []
};
},
methods: {

},
created() {
    console.log('home created')
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
</style>