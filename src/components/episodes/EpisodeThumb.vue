<template>
  <div class="episode-thumb">
    <h2>{{episode.name}}</h2>
    <p>{{episode.air_date}}</p>
  </div>
</template>


<script>
export default {
  name: "EpisodeThumb",
  props: ["episode"]
};
</script>
