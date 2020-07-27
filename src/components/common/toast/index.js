import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstractor = Vue.extend(Toast)

  // 2.用new的方式, 根据组件构造器, 可以创建出来一个组件对象
  const toast = new toastConstractor()

  // 3.将组件对象挂载到某个元素上
  toast.$mount(document.createElement('div'))
  
  // 4.toast.$el对应是div
  document.body.appendChild(toast.$el)



  Vue.prototype.$toast = toast

  console.log(toastConstractor)
  console.log(toast)
}

export default obj