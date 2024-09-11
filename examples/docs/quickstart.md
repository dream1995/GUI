## 快速上手

### 完整引入

在 main.js 中安装插件：

```javascript
import Vue from 'vue';
import LgsnUI from 'lgsn-ui';

// CSS文件
import "lgsn-ui/lib/component-css/index.css";
import App from './App.vue';

Vue.use(LgsnUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
