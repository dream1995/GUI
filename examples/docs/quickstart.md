## 快速上手

### 完整引入

在 main.js 中安装插件：

```javascript
import Vue from 'vue';
import LgsnUI from 'lgsn-ui';

// CSS文件
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(LgsnUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```


#### 按需引入


```javascript
import Vue from 'vue';
import { LgsnCalendar } from 'lgsn-ui';
import App from './App.vue';
import 'lgsn-ui/component/src/index.css'

Vue.component(LgsnCalendar.name, LgsnCalendar);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
