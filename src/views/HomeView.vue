<script setup lang="ts">
import MealCard from '@/components/MealCard.vue'
import { useMealStore } from '@/stores/meal'
import { onBeforeMount } from 'vue'

const store = useMealStore()

onBeforeMount(() => {
  store.getRandomMeals()
})
</script>

<template>
  <h1 class="font-semibold text-xl">Random Meals for <span class="font-bold">You!</span></h1>
  <div v-if="store.loading">
    <h1>Loading...</h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5" v-else>
    <MealCard v-for="meal of store.randomMeals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
