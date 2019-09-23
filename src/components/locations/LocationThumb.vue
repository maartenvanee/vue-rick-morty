<template>
<div class="location-thumb">
  <h2>{{location.name}}</h2>
  <!-- <img v-bind:src="location.image" /> -->
</div>
</template>


<script>
export default {
  name: 'LocationThumb',
  props: ['location'],
}
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