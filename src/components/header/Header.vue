<template>
  <div class="header">

          <router-link to="/"><h1>Rick and Morty</h1></router-link>

    <ul class="menu">
      <li>
        <p>
          <router-link to="/characters">Characters</router-link>
          </p>
      </li>
      <li>
        <router-link to="/locations">Locations</router-link>
      </li>
      <li>
        <router-link to="/episodes">Episodes</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<style scoped lang="scss">

.header {
  display: block;
  width: 100%;
  background-color: rgb(232, 232, 238);
  padding: 30px 40px;

  h1 {
    font-size: 30px;
  }

  ul {
    li {
      display: inline-block;
      list-style: none;
    }
  }
}

</style>
