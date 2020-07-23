<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>


<style scoped>
@import "assets/css/base.css";

#app {
  height: 100vh;
  overflow: hidden;
}
</style>
