<template>

<div class="character-list">
  <ul><li v-for="character in charactersData" v-bind:key="character.id">
      <Character v-bind:character="character" />
    </li></ul>

  <button v-if="!ids" class="button-more" v-on:click="getMoreCharacters">More</button>
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
      charactersData: [],
      characterUrl: 'https://rickandmortyapi.com/api/character/',
      pageNumber: 1
    }
  },
  mounted () {
    axios.get(this.characterUrl + this.ids).then(response => {
      if(this.ids) {
        this.charactersData = response.data
      } else {
        this.charactersData = response.data.results
      }
    });
  },
  methods: {
    getMoreCharacters: function () {
      this.pageNumber += 1;
      axios.get(this.characterUrl + `?page=${this.pageNumber}`).then(response => {
          this.charactersData = this.charactersData.concat(response.data.results);
      })
    }
  }
}
</script>


<style scoped lang="scss">

  .character-list {
    width: 100%;
    padding-left: $spacing;

    ul {
      width: 100%;

      li {
        display: inline-block;
        width: 22%;
        list-style: none;
        margin-top: $spacing;
        margin-right: 40px;


      }
      @media (max-width: 1390px) {
        li {
          width: 29%;
        }
      }
      @media (max-width: 1200px) {
        li {
          width: 29%;
        }
      }
      @media (max-width: 1050px) {
        li {
          width: 44%;
        }
      }
      @media (max-width: 750px) {
        li {
          width: 100%;
          margin-right: 0;
        }
      }
    }

    button {
        margin: $spacing 0;
    }
  }
</style>
