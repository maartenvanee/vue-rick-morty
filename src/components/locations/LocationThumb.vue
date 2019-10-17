<template>
  <div class="location-thumb">
    <h3>{{location.name}}</h3>
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