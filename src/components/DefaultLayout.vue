<template>
  <NavBar />
  <div class="px-12 lg:max-w-[1200px] mx-auto">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import NavBar from './NavBar.vue'
</script>
