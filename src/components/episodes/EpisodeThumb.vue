<template>
  <div class="episode-thumb">
    <h3>{{episode.name}}</h3>
    <p>{{episode.air_date}}</p>
  </div>
</template>


<script>
export default {
  name: "EpisodeThumb",
  props: ["episode"]
};
</script>
