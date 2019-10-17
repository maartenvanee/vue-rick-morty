<template>
  <div class="character-thumb">
    <router-link :to="{ name: 'character', params: {id: character.id } }">
      <h3>{{character.name}}</h3>
      <img v-bind:src="character.image" />
      <p>{{character.status}}, {{character.species}}, {{character.gender}}</p>
      <p>{{character.origin.name}}</p>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "CharacterThumb",
  props: ["character"]
};
</script>


<style scoped lang="scss">
img {
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 6px;
}

p {
  margin-bottom: 4px;
  width: 100%;
}

h2 {
  width: 100%;
}
</style>