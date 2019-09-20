
<template>

<div class="character-list">
  <ul>
    <li v-for="character in charactersData" v-bind:key="character.id">
      <Character v-bind:character="character" />
    </li>
  </ul>
</div>

</template>

<script>
import Character from './Character.vue'
import axios from 'axios';

export default {
  name: 'CharacterList',
  props: ['ids'],
  components: {
    Character
  },
  data() {
    return {
      charactersData: null,
    }
  },
  mounted () {
    axios.get('https://rickandmortyapi.com/api/character/' + this.ids).then(response => {
      this.charactersData = response.data
    });
  }
}
</script>


<style scoped lang="scss">

  .character-list {

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
