<template>
<div class="character">
  <h2>{{character.name}}</h2>
  <img v-bind:src="character.image" />
  <p>{{character.status}}, {{character.species}}, {{character.gender}}</p>
  <p>{{character.origin.name}}</p>
</div>
</template>


<script>
export default {
  name: 'Character',
  props: ['character'],
}
</script>


<style scoped lang="scss">

img {
  width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 6px;
}

p {
  margin-bottom: 4px;
}
</style>