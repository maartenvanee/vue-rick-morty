<template>
  <div id="app">
    <Header/>

    <router-view></router-view>

  </div>
</template>

<script>
import Header from './components/header/Header.vue'
// import Intro from './components/intro/Intro.vue'

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
