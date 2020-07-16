<template>
  <div>
    <swiper>
      <swiper-item class="item" v-for="item in topImages" :key="item">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.item {
  height: 300px;
  overflow: hidden;
}
</style>