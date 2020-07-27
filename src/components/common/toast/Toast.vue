<template>
  <div v-show="isShow" class="toast">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(message='默认文字',duration=1500) {
        this.isShow = true
        this.message = message
        setTimeout(()=>{
          this.isShow = false
        },duration)
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* min-width: 80%; */
  white-space: nowrap;
  text-align: center;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 999;
}
</style>