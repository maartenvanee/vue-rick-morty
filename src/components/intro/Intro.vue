
<template>

<div class="intro">
  <ul>
    <li v-for="character in characters" v-bind:key="character.id">
        <Character v-bind:character="character" />
    </li>
  </ul>
</div>

</template>

<script>
import Character from '../character/Character.vue'
import axios from 'axios';

export default {
  name: 'Intro',
  components: {
    Character
  },
  data() {
    return {
      characters: null,
    }
  },
  mounted () {
    axios
      .get('https://rickandmortyapi.com/api/character/1,2,183')
      .then(response => {
        this.characters = response.data
      });
  }
}
</script>


<style scoped lang="scss">

  .intro {
    padding: 30px 40px;

    ul {
      padding-top: 20px;
      li {
        display: inline-block;
        list-style: none;

        &:not(:first-of-type) {
          margin-left: 40px;
        }
      }
    }
  }
</style>
