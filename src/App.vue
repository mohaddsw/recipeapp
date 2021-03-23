<template>
  <div id="app">
    <!-- Baner of Food recipe web site -->
    <baner/>
    <!-- Recipe Items -->
    <recipes/>
    <!-- Footer -->
    <recipefooter/>
  </div>
</template>

<script>

import baner from '/src/components/Baner.vue'
import recipes from '/src/components/Recipe-item.vue'
import recipefooter from '/src/components/Recipe-footer.vue'
export default {
  components:{
    baner,
    recipes,
    recipefooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: 'Open Sans', sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden !important;
}
#app{
  position: relative;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 5px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #D97C2B; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #D97C2B; 
}
</style>
