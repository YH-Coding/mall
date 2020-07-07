<template>
<div id="tab-control">
    <div class="tab-item" v-for="(item, index) in titles" :key="item" :class="{active:index===currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
    </div>
</div>
</template>

<script>
export default {
name: 'TabControl',
props: {
    titles: {
        type: Array,
        default: []
    }
},
components: {},
data() {
return {
    currentIndex: 0
};
},
methods: {
    itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
    }
},
}
</script>

<style scoped>
#tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
}
.tab-item {
    flex: 1;
}
.tab-item span {
    padding: 5px;
}
.active {
    color: var(--color-high-text);
}
.active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>