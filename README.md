# lgsn-ui

> 基于Vue2.0 组件库

## 安装
```shell
npm install element-ui -S
```

## 使用方式
``` javascript
import Vue from 'vue'
import lgsn from 'lgsn-ui'

Vue.use(lgsn)

// or
import {
  GCalendar,
  // ...
} from 'lgsn-ui'

Vue.component(GCalendar.name, GCalendar)
```