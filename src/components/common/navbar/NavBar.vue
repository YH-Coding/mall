<template>
<div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
name: 'NavBar',
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
    .nav-bar {
        position: relative;
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
        z-index: 10;
    }
    .left, .right {
        width: 60px;
        /* background-color: red; */
    }
    .center {
        flex: 1;
        /* background-color: green; */
    }
    .left {
        position: relative;
    }
    .left img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 25%;
    }
</style>