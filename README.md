# thisisJs-1.0.0.js
**综合了常用的js方法，以及一些基本算法，复用性高，不依赖任何库**

## 如何贡献

- gulp
- eslint强制规则限定
- 较强的原生基础

## 使用方法

**直接引入**

```html

<script type="text/javascript" src="../dist/js/thisisJs-1.0.0.js"></script>
var tools = new thisisJs();   // 实例化
tools.common.isArray(arr)   //返回true or false
```
## API列表

- isArray(arr)
- arraySort(arr) —— 数组排序（快排）
- arrayEase(arr) —— 数组去重
- arrayEase(arr) —— 数组去重
- getUrlParam(str) —— 获取链接参数的值
- encode(str) —— base64加密
- decode(str) —— base64解密
- dateFormate(date) —— 日期格式化（"yy:MM:dd hh:mm:ss"）
- appendCss(url) —— 动态添加css
- appendJs(url) —— 动态添加js
- getUrlParam(str) —— 获取链接参数的值
- getUrlParam(str) —— 获取链接参数的值

### The Relentless Pursuit of Perfection    持续更新中