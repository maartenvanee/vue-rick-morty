<template>

<div class="page page-intro">
  <CharacterList ids="1,2" />
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
