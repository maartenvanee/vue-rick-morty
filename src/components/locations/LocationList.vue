<template>
  <div class="thumb-list">
    <ul>
      <li v-for="location in locationsData" v-bind:key="location.id">
        <LocationThumb v-bind:location="location" />
      </li>
    </ul>

    <button v-if="!disableMore" class="button-more" v-on:click="getMoreLocations">More</button>
  </div>
</template>

<script>
import LocationThumb from "./LocationThumb.vue";
import axios from "axios";

export default {
  name: "LocationList",
  props: [],
  components: {
    LocationThumb
  },
  data() {
    return {
      locationsData: [],
      locationUrl: "https://rickandmortyapi.com/api/location/",
      pageNumber: 0,
      disableMore: false
    };
  },
  mounted() {
    this.getMoreLocations();
  },
  methods: {
    getMoreLocations: function() {
      this.pageNumber += 1;
      axios
        .get(this.locationUrl + `?page=${this.pageNumber}`)
        .then(response => {
          this.locationsData = this.locationsData.concat(response.data.results);
          if (response.data.info.count <= this.locationsData.length) {
            this.disableMore = true;
          }
        });
    }
  }
};
</script>


<style scoped lang="scss">
</style>
