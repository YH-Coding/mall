<template>
  <div>
      <detail-nav-bar></detail-nav-bar>
    详情页{{iid}}
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
export default {
  name: "",
  components: {
      DetailNavBar
  },
  data() {
    return {
      iid: ""
    };
  },
  methods: {},
  created() {
    this.iid = this.$route.params.iid;
  }
};
</script>

<style scoped>
</style>