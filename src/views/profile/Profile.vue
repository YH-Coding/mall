<template>
  <div id="profile">
      <nav-bar class="nav-bar">
          <div slot="center">渣渣灰商城</div>
      </nav-bar>  
      <user-info></user-info>    
      <account-info></account-info>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import UserInfo from './childComps/UserInfo'
import AccountInfo from './childComps/AccountInfo'

export default {
  name: 'Profile',
  components: {
      NavBar,
      UserInfo,
      AccountInfo
  }
}
</script>

<style scoped>
#profile {
    background-color: #f2f2f2;
  }
.nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #ffffff;
}
</style>


