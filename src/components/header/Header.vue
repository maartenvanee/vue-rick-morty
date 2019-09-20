<template>
  <div class="header">

    <router-link to="/"><h1>Rick and Morty</h1></router-link>

    <ul class="menu">
      <li>
        <router-link to="/characters">Characters</router-link>
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
  padding: $page-padding;

  h1 {
    font-size: $font-size-h1;
    line-height: 40px;
  }

  ul.menu {
    position: absolute;
    right: 0px;
    top: 0;
    padding: $page-padding;
    display: inline-block;

    li {
      display: inline-block;
      list-style: none;
      line-height: 40px;
      font-weight: bold;

      a {
        opacity: 0.6;

        &:hover {
          opacity: 1;
        }
      }

      &:not(:first-of-type) {
        margin-left: 40px;
      }
    }
  }
}

</style>
