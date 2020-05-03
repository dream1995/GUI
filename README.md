# lgsn-ui 

> 基于Vue2.0 组件库

## 安装
```shell
npm install lgsn-ui --save
```

## 使用方式
``` javascript
import Vue from 'vue'
import lgsn from 'lgsn-ui'

Vue.use(lgsn)

// 或者
import {
  GCalendar,
  // ...
} from 'lgsn-ui'

Vue.component(GCalendar.name, GCalendar)
```