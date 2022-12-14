<template>
  <Navbar/>
  <div class="container text-center">
    <RouterView/>
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';
import Navbar from './components/Navbar.vue';
export default {
  components: {RouterLink,Navbar,RouterView}
}
</script>

<style scoped>
  div{
    border-radius: 17px;
    padding: 1rem;
    box-shadow: 3px 3px 7px #ccc;
  }
</style>