import Vue from 'vue';
import app from './app';
import routes from './router';
import VueRouter from 'vue-router';
import hljs from 'highlight.js';

import './assets/common.css';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
new Vue({ // eslint-disable-line
  render: h => h(app),
  router
}).$mount('#app');
