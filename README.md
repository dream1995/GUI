# lgsn-ui
> 基于Vue2.0 组件库
> [组件文档](https://lgsn.github.io/LGSN-UI-docs/index.html)

## 安装
```shell
npm install lgsn-ui --save
```

## 使用方式
``` javascript
import Vue from 'vue'
import lgsn from 'lgsn-ui'
import 'lgsn-ui/lib/component-css/index.css'

Vue.use(lgsn)

// 或者
import {
  LgsnCalendar,
  // ...
} from 'lgsn-ui'

Vue.component(LgsnCalendar.name, LgsnCalendar)
```
