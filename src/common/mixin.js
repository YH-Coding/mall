import {POP, NEW, SELL} from './const'

export const backTopMixin = {
  data() {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  },
}

export const tabControlMixin = {
  data() {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      this.currentType = [POP, NEW, SELL][index]
    }
  },
}