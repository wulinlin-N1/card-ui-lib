<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo />
    <m-card
      imgSrc="01.jpg"
      summary="测试1"
    />
    <m-card
      imgSrc="02.jpg"
      summary="测试1"
    >
      <template v-slot:footer>
          <div class="footer">
            <div class="level">初级</div>
            <div class="price">300</div>
          </div>
      </template>
    </m-card>
    <el-button>test</el-button>
    <el-link type="success">成功链接</el-link>
    <Button type="primary">Primary</Button>
  </div>
</template>

<script>

import Vue from 'vue'
import MyPlugin from './myPlugin'
console.log(MyPlugin)
Vue.use(MyPlugin)

export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {

  },
  mounted: function(){
    this.$myMethod()
    Vue.myGlobalMethod()
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: red;
}
</style>
