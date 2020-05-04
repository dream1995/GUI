import Vue from 'vue';
import app from './app';
import routes from './router';
import VueRouter from 'vue-router';
import hljs from 'highlight.js';
import LgsnUI from 'main/index.js';
import lgsnHead from './pages/lgsn-head';
import lgsnMenu from './pages/lgsn-menu';
import lgsnDome from './pages/lgsn-dome';

import 'packages/component-css/src/index.scss';
import './packages-styles/index.scss';
import './assets/common.css';

Vue.use(VueRouter);
Vue.use(LgsnUI);

Vue.component(lgsnHead.name, lgsnHead);
Vue.component(lgsnMenu.name, lgsnMenu);
Vue.component(lgsnDome.name, lgsnDome);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
new Vue({ // eslint-disable-line
  render: h => h(app),
  router
}).$mount('#app');
