<template>
<div id="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
</div>
</template>

<script>
export default {
name: 'HomeRecommend',
props: {
    recommends: {
        type: Array,
        default: []
    }
},
components: {},
data() {
return {

};
},
methods: {

},
}
</script>

<style scoped>
#recommend {
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 12px;
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;
}
.recommend-item {
    flex: 1;
}
.recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
}
</style>