<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
   <header class="navbar">
    <div>
      <nav>
        <RouterLink to="/">Posts</RouterLink> - 
        <RouterLink to="/authors">Authors</RouterLink>
      </nav>
    </div>
  </header> 

  <RouterView />
</template>

<style>
  .navbar {
    background-color: lightgreen;
    padding: 1.2rem;
  }
</style>