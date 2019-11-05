import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as ElementUI from 'element-ui';
import Icon from 'vue-svg-icon/Icon.vue';



Vue.config.productionTip = false;
Vue.use(ElementUI);
//import icon
Vue.component('icon', Icon);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
