import Demo from './src/main.vue'

Demo.install = function(Vue) {
    Vue.component(Demo.name, Demo)
}

// 新增下面两行
export {
  Demo
}

export default Demo
