<template>
  <div class="page page-episodes">
    <h2>Episodes</h2>
    <EpisodeList />
  </div>
</template>

<script>
import EpisodeList from "../episodes/EpisodeList";
export default {
  name: "PageEpisodes",
  components: {
    EpisodeList
  }
};
</script>

<style scoped lang="scss">
</style>