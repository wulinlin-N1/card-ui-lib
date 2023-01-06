import Card from './src/main.vue'

Card.install = function(Vue) {
    Vue.component(Card.name, Card)
}

// 新增下面两行
export {
  Card
}

export default Card