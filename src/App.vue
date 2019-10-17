<template>
  <div id="app">
    <Header />
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>