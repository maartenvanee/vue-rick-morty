<template>
  <div class="episode-list">
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
.episode-list {
  width: 100%;
  padding-left: $spacing;

  ul {
    width: 100%;

    li {
      display: inline-block;
      width: 22%;
      list-style: none;
      margin-bottom: $spacing;
      margin-right: 40px;
    }
    @media (max-width: 1390px) {
      li {
        width: 29%;
      }
    }
    @media (max-width: 1200px) {
      li {
        width: 29%;
      }
    }
    @media (max-width: 1050px) {
      li {
        width: 44%;
      }
    }
    @media (max-width: 750px) {
      li {
        width: 100%;
        margin-right: 0;
      }
    }
  }

  button {
    margin: $spacing 0;
  }
}
</style>
