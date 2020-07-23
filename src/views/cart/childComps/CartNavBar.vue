<template>
  <nav-bar>
    <div slot="center">购物车({{cartCount}})</div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import { mapGetters } from 'vuex'

export default {
  name: 'CartNavBar',
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['cartCount'])
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
  font-weight: 800;
}
</style>