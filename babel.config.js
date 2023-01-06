module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    '@babel/plugin-transform-modules-umd'
    // [
    //  "component",
    //  {
    //   "libraryName": "load-on-demand", // 组件库的名字
    //   "camel2Dash": false, // 是否把驼峰转换成xx-xx的写法
    //   "styleLibrary": {
    //    "base": false, // 是否每个组件都默认引用base.css
    //    "name": "theme" // css目录的名字
    //   }
    //  }
    // ]
   ]
}
