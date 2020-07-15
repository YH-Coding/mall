<template>
  <div>
    详情页{{iid}}
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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