<template>

<div class="location-list">
  <ul><li v-for="location in locationsData" v-bind:key="location.id">
      <LocationThumb v-bind:location="location" />
    </li></ul>

  <button v-if="!ids" class="button-more" v-on:click="getMoreLocations">More</button>
</div>

</template>

<script>
import LocationThumb from './LocationThumb.vue'
import axios from 'axios';

export default {
  name: 'LocationList',
  props: ['ids'],
  components: {
    LocationThumb
  },
  data() {
    return {
      locationsData: [],
      locationUrl: 'https://rickandmortyapi.com/api/location/',
      pageNumber: 0
    }
  },
  mounted () {
    this.getMoreLocations();
  },
  methods: {
    getMoreLocations: function () {
      this.pageNumber += 1;
      axios.get(this.locationUrl + `?page=${this.pageNumber}`).then(response => {
          this.locationsData = this.locationsData.concat(response.data.results);
      })
    }
  }
}
</script>


<style scoped lang="scss">

  .character-list {
    width: 100%;
    padding-left: $spacing;

    ul {
      width: 100%;

      li {
        display: inline-block;
        width: 22%;
        list-style: none;
        margin-top: $spacing;
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
