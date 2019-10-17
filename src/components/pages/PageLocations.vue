<template>
  <div class="page page-locations">
    <h2>Locations</h2>
    <LocationList />
  </div>
</template>

<script>
import LocationList from "../locations/LocationList.vue";

export default {
  name: "PageLocations",
  components: {
    LocationList
  }
};
</script>

<style scoped lang="scss">
</style>