import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import PageIntro from "./components/pages/PageIntro";
import PageCharacters from "./components/pages/PageCharacters";
import PageLocations from "./components/pages/PageLocations";
import PageEpisodes from "./components/pages/PageEpisodes";

import SingleCharacter from "./components/characters/SingleCharacter";

import "./sass/main.scss";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PageIntro
  },
  {
    path: "/characters",
    component: PageCharacters
  },
  {
    path: "/locations",
    component: PageLocations
  },
  {
    path: "/episodes",
    component: PageEpisodes
  },
  {
    path: "/character/:id",
    name: "character",
    component: SingleCharacter
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
