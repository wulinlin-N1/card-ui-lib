# card
卡片组件

### 示例
<m-card imgSrc="/1.jpg" summary="卡片组件-test"/>

### 代码
```html
<m-card imgSrc="/1.jpg" summary="卡片组件-test"/>
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- | --- | --- | --- |
| width | 卡片的宽度 | Number | false | - |
| imgSrc | 图片的资源地址 | String | true | - |
| imgHeight | 卡片的高度 | Number | false | - |
| summary | 卡片概要 | String/Slot | false | - |
| footer | 卡片底部 | Slot | false | - |