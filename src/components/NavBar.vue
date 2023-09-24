<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>

<template>
  <div class="bg-white shadow-lg mb-10 py-2">
    <div class="h-12 px-12 flex justify-between items-center">
      <RouterLink to="/" class="inline-flex items-center h-full font-bold text-3xl"
        >🍴 Resep <span class="text-red-600">Ku</span></RouterLink
      >

      <!-- Mobile Menu -->
      <div class="sm:hidden relative" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <button class="text-gray-600 hover:text-gray-700 focus:outline-none">Search</button>

        <div
          v-if="isMobileMenuOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-300 rounded-lg z-10"
        >
          <RouterLink
            :to="{ name: 'byName' }"
            class="block px-4 py-2 transition-colors hover:bg-slate-100"
            >Search by Name</RouterLink
          >
          <RouterLink
            :to="{ name: 'byLetter', params: { letter: 'A' } }"
            class="block px-4 py-2 transition-colors hover:bg-slate-100"
            >Search by Letter</RouterLink
          >
        </div>
      </div>
      <div class="sm:flex space-x-4 hidden">
        <RouterLink
          :to="{ name: 'byName' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:text-red-600"
          >Search by Name</RouterLink
        >
        <RouterLink
          :to="{ name: 'byLetter', params: { letter: 'A' } }"
          class="inline-flex items-center px-2 h-full transition-colors hover:text-red-600"
          >Search by Letter</RouterLink
        >
      </div>
    </div>
  </div>
</template>
