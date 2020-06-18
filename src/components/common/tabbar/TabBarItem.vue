<template>
<div @click="itemClick" class="tab-bar-item">
  <div v-if='!isActive'><slot name='item-icon'></slot></div>
  <div v-else><slot name='item-icon-active'></slot></div>
  <div :style="activeStyle"><slot name='item-text'></slot></div>
</div>
</template>

<script>
export default {
name: 'TabBarItem',
components: {},
props: {
    path: String,
    activeColor: {
        type: String,
        default: 'red'
    }
},
data() {
return {
    // isActivity: true
};
},
computed: {
    isActive(){
        return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
    }
},
methods: {
    itemClick(){
        this.$router.replace(this.path)
    }
},
}
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    /* height: 49px; */
    padding-top: 3px;
    text-align: center;
    font-size: 14px;
}
.tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    /* margin-bottom: 2px; */
}
.active {
    color: red;
}
</style>