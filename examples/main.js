import Vue from 'vue';
import app from './app';

new Vue({ // eslint-disable-line
  render: h=> h(app)
}).$mount('#app');
