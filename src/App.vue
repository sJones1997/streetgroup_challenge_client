<template>
  <HomeOwnersView/>
</template>

<script setup lang="ts">
import HomeOwnersView from './views/HomeOwnersView.vue';

</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

* {
  padding: 0;
  margin: 0;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Montserrat', sans-serif;
  color: #002147;
}

p {
  font-family: 'Inter', sans-serif;
  color: #002147;
}

#app {
  height: 100vh;
  width: 100vw;
}
</style>
