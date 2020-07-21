<template>
  <div class="detail">
    <detail-nav-bar @itemClick="titleClick" :current-index="currentIndex" class="nav-bar"></detail-nav-bar>
    <scroll class="content" 
            ref="scroll"
            @scroll="contentScroll"
            :probe-type="3">
      <detail-swiper ref="base" :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <detail-recommend-info ref="recommend" :recommend-list="recommendList"></detail-recommend-info>
    </scroll>
    <back-top @backTop="backTop" class="back-top" v-show="showBackTop">
      <img src="~assets/img/common/top.png" alt="">
    </back-top>
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
import DetailRecommendInfo from './childComps/DetailRecommendInfo'

import BackTop from '@/components/content/backTop/BackTop'

import {backTopMixin} from '@/common/mixin'
import {BACKTOP_DISTANCE} from '@/common/const'

export default {
  inject: ['reload'],
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    Scroll,

    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    BackTop
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      currentIndex: 0,
      themeTops: []
    };
  },
  created() {
    this._getDetailData()
    this._getRecommend()
  },
  updated() {
    this._getOffsetTops()
  },
  mounted() {
    this.$bus.$on('goodsClick',() => {
      this.reload()
    })
  },
  methods: {
    /** -----------=================== 业务逻辑 =================----------- */
    _getOffsetTops() {
      this.themeTops = []
      this.themeTops.push(this.$refs.base.$el.offsetTop)
      this.themeTops.push(this.$refs.param.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.recommend.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE)
    },
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    contentScroll(position) {
      // 1.监听backTop的显示
      this.showBackTop = position.y < -BACKTOP_DISTANCE

      // 2.监听滚动到那个主题
      this._listenScrollTheme(-position.y)
    },
    _listenScrollTheme(position) {
      let length = this.themeTops.length
      for (let i = 0; i < length; i++) {
        let iPos = this.themeTops[i]
        if (position >= iPos && position < this.themeTops[i+1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i
          }
          break
        }
      }
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100)
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

.back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
}
</style>