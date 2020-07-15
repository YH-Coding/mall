<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {
      scroll: {}
    };
  },
  mounted() {
      setTimeout(this.__initScroll, 20)
  },
  methods: {
      __initScroll() {
          // 1.初始化BScroll对象
        if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType: this.probeType,
            click: true,
            pullUpLoad: this.pullUpLoad
        })
        // 2.将监听事件回调
        this.scroll.on('scroll', (position) => {
            this.$emit('scroll', position)
        })
        // 3.监听到上拉到顶部
        this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
        })
      },
      refresh() {
          // console.log('----')
          this.scroll && this.scroll.refresh &&  this.scroll.refresh()
      },
      finishPullUp() {
          this.scroll && this.scroll.finishPullUp()
      },
      scrollTo(x, y, time=300) {
          this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
  },
  watch: {
      data() {
          setTimeout(this.refresh, 2000)
      }
  }
};
</script>

<style scoped>
</style>