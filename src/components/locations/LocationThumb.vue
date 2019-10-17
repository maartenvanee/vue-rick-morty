<template>
  <div class="location-thumb">
    <h2>{{location.name}}</h2>
    <p>Dimension: {{location.dimension}}</p>
    <p>Type: {{location.type}}</p>
  </div>
</template>


<script>
export default {
  name: "LocationThumb",
  props: ["location"]
};
</script>