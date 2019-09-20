<template>

<div class="page page-intro">
  <h2>Intro</h2>
  <CharacterList ids="1,2,183" />
</div>

</template>

<script>
import CharacterList from '../characters/CharacterList.vue'

export default {
  name: 'PageIntro',
  components: {
    CharacterList
  },
}
</script>

<style scoped lang="scss">

</style>
