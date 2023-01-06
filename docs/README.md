# 快速开始

#### 安装组件库
```bash
npm install mooc-ui-lib-test
```
#### 引用组件库
> 在 main.js 中引用组件库

```javascript
// 全部引入
import 'mooc-ui-lib-test/dist/css/index.css'
import MUI from 'mooc-ui-lib-test'
Vue.use(MUI)

// 按需引用
import 'mooc-ui-lib-test/dist/css/demo.css'
import { Demo } from "mooc-ui-lib-test"
Vue.use(Demo)

```
