<template>
  <div class="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    </scroll>
    <!-- 详情页{{iid}} -->
  </div>
</template>

<script>
import { getDetail, getRecommend,Goods, Shop, GoodsParam } from "network/detail";

import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    Scroll,

    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo
  },
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: []
    };
  },
  created() {
    this._getDetailData()
    this._getRecommend()
  },
  methods: {
    /** -----------=================== 业务逻辑 =================----------- */
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    /** -----------=================== 网络请求 =================----------- */
    _getDetailData() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        console.log("data", res);

        // 0.获取结果
        const data = res.result;

        // 1.获取顶部信息
        this.topImages = data.itemInfo.topImages;

        // 2.获取商品信息
        this.goods = new Goods(data);

        // 3.获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 4.获取商品信息
        this.detailInfo = data.detailInfo;

        // 5.获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams);

        // 6.获取评论信息
        if(data.rate.list){
          this.commentInfo = data.rate.list[0]
        }
      });
    },
    _getRecommend() {
      getRecommend().then((res, error) => {
        if(error) return
        this.recommendList = res.data.list
      })
    }
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