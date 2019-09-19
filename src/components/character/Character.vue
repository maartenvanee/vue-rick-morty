<template>
<div class="character">
  <h2>{{character.name}}</h2>
  <img v-bind:src="character.image" />
  <p>{{character.status}}, {{character.species}}</p>
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
  margin-top: 10px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 4px;
}
</style>