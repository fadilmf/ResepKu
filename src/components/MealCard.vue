<script setup lang="ts">
const { meal } = defineProps({
  meal: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <RouterLink
    :to="{ name: 'mealDetails', params: { id: meal?.idMeal } }"
    class="rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:bg-slate-100 hover:scale-105 transition-all"
  >
    <img class="rounded-t-xl" :src="meal?.strMealThumb" :alt="meal?.strMeal" />
    <div class="px-4 pb-4">
      <h1 class="font-bold mt-3">{{ meal?.strMeal }}</h1>
      <p>{{ meal?.strCategory }}</p>
    </div>
  </RouterLink>
</template>
