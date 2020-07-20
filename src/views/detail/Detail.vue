<template>
  <div class="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
    <!-- 详情页{{iid}} -->
  </div>
</template>

<script>
import { getDetail, Goods, Shop } from "network/detail";

import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    Scroll,

    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  methods: {},
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log("data", res);
      const data = res.result;

      // 1.获取顶部图片数据
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息数据
      this.goods = new Goods(data);

      // 3.获取店铺信息数据
      this.shop = new Shop(data.shopInfo);
    });
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
    /* position: absolute;
    top: 44px;
    bottom: 60px; */
  }
 
</style>