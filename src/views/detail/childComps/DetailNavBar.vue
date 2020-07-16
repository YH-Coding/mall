<template>
  <div>
      <nav-bar>
          <img slot="left" @click="backClick" src="@/assets/img/common/back.svg" alt="">
          <div slot="center" class="content">
              <div 
              v-for="(item,index) in titles" 
              :key="index"
              class="item"
              :class="{active:currentIndex===index}"
              @click="itemClick(index)"
              >{{item}}</div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "",
  components: {
      NavBar
  },
  data() {
    return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
    };
  },
  methods: {
      itemClick(index) {
          this.currentIndex = index
      },
      backClick() {
          this.$router.back()
      }
  }
};
</script>

<style scoped>
.content {
    display: flex;
}
.item {
    flex: 1;
}
.active {
    color: var(--color-high-text);
}
</style>