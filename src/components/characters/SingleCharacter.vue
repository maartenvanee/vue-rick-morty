<template>
  <div v-if="character">
    <h1>{{ character.name }}</h1>
    <img v-bind:src="character.image" />
    <p>Status: {{character.status}}</p>
    <p>Species: {{character.species}}</p>
    <p>Gender: {{character.gender}}</p>
    <p>Origin: {{character.origin.name}}</p>
    <p>Current location: {{character.location.name}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleCharacter",
  data() {
    return {
      character: null,
      characterUrl: "https://rickandmortyapi.com/api/character/"
    };
  },
  mounted() {
    axios.get(this.characterUrl + this.$route.params.id).then(response => {
      if (response.data) {
        this.character = response.data;
      }
    });
  }
};
</script>