import Vue from 'vue';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import VueSmoothScroll from 'vue2-smooth-scroll'
import Parallax from 'vue-parallaxy'
import VueScrollReveal from 'vue-scroll-reveal';
import VueTypedJs from 'vue-typed-js'
Vue.config.productionTip = false
Vue.use(VueSmoothScroll)
Vue.use(Parallax)
Vue.use(VueTypedJs)
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 2000,
  scale: 1,
  origin:top,
  distance: '30px',
  mobile: true,
  interval:200,
  reset:true,
});
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
