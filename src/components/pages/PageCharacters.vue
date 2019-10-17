<template>
  <div>
    <h2>Characters</h2>
    <CharacterList ids />
  </div>
</template>

<script>
import CharacterList from "../characters/CharacterList.vue";

export default {
  name: "PageCharacters",
  components: {
    CharacterList
  }
};
</script>

<style scoped lang="scss">
</style>
