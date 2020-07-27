<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
import Icon from "components/content/Icon/Icon.vue";
import SvgIcon from "components/content/Icon/svg.vue";
export default {
  name: "App",
  components: {
    MainTabBar,
    Icon,
    SvgIcon,
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
