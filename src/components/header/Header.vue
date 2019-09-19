<template>
  <div class="header"><h1>Rick and Morty</h1></div>
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
}

</style>
