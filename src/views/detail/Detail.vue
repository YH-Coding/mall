<template>
  <div>
      <detail-nav-bar></detail-nav-bar>
      <detail-swiper :topImages="topImages"></detail-swiper>
    <!-- 详情页{{iid}} -->
  </div>
</template>

<script>
import {getDetail, Goods} from 'network/detail'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
export default {
  name: "Detail",
  components: {
      DetailNavBar,
      DetailSwiper
  },
  data() {
    return {
      iid: "",
      topImages: [],
      goods: null
    };
  },
  methods: {},
  created() {
      console.log('---')
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
        console.log('data',res)
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data);
        
    })
    // getDetail(this.iid).then(data => {
    //     console.log('getDetail: ',data)
    // })
  }
};
</script>

<style scoped>
</style>