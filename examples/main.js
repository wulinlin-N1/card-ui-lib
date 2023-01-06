import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.scss'
// import Demo from '../components/lib/demo/index.js'
// import Card from '../components/lib/card/index.js'

// Vue.use(Demo) // Demo.install(Vue)
// Vue.use(Card)

// 全局引入
// import 'mooc-ui-lib-test/dist/css/index.css'
// import MUI from 'mooc-ui-lib-test'
// console.log(MUI)
// Vue.use(MUI)


// 按需引入

// import 'mooc-ui-lib-test/dist/css/demo.css'
// import "../components/lib/index.js"

import { Demo, Card } from "mooc-ui-lib-test"
import test from 'mooc-ui-lib-test'
console.log('%%%%%%%%%%% -- test: ', test)
Vue.use(Demo)
Vue.use(Card)

// Vue.use(Card)

// 引用本地的项目
// import { Card, Demo } from "../dist/index.umd.js"
// Vue.use(Demo)
// Vue.use(Card)

// import * as test from '../components/lib/test/index.js'
// console.log('test ---- ', test)

import iView from 'iview'
console.log('iView: ', iView)
import 'iview/dist/styles/iview.css'

Vue.use(iView)

import 'element-ui/lib/theme-chalk/index.css'
import * as ele from 'element-ui'
import { Button } from 'element-ui'
import { Link } from 'element-ui'
Vue.use(Button)
Vue.use(Link)

console.log(ele)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
