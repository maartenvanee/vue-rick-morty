<template>
  <div class="thumb-list">
    <ul>
      <li v-for="episode in episodesData" v-bind:key="episode.id">
        <EpisodeThumb v-bind:episode="episode" />
      </li>
    </ul>

    <button v-if="!disableMore" class="button-more" v-on:click="getMoreEpisodes">More</button>
  </div>
</template>

<script>
import EpisodeThumb from "./EpisodeThumb.vue";
import axios from "axios";

export default {
  name: "EpisodeList",
  props: [],
  components: {
    EpisodeThumb
  },
  data() {
    return {
      episodesData: [],
      locationUrl: "https://rickandmortyapi.com/api/episode/",
      pageNumber: 0,
      disableMore: false
    };
  },
  mounted() {
    this.getMoreEpisodes();
  },
  methods: {
    getMoreEpisodes: function() {
      this.pageNumber += 1;
      axios
        .get(this.locationUrl + `?page=${this.pageNumber}`)
        .then(response => {
          this.episodesData = this.episodesData.concat(response.data.results);
          if (response.data.info.count <= this.episodesData.length) {
            this.disableMore = true;
          }
        });
    }
  }
};
</script>


<style scoped lang="scss">
</style>
