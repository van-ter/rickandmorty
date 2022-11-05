<template>
  <header>
    <navbar></navbar>
  </header>

  <RouterView />

</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from '@/components/UI/Navbar.vue'
  import HomePage from '@/views/HomePage.vue' 

  export default {
    components: {
      Navbar,
      HomePage
    }
  }
</script>


<style scoped>

</style>
