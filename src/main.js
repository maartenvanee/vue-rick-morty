import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Intro from './components/intro/Intro'
import Characters from './components/characters/Characters'
import Locations from './components/locations/Locations'
import Episodes from './components/episodes/Episodes'

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Intro
  },
  {
    path: '/characters',
    component: Characters
  },
  {
    path: '/locations',
    component: Locations
  },
  {
    path: '/episodes',
    component: Episodes
  }
];
const router = new VueRouter({
  mode: 'history',
  routes,
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
