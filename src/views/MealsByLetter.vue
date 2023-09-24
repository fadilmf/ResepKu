<script setup lang="ts">
import MealCard from '@/components/MealCard.vue'
import { useMealStore } from '@/stores/meal'
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const route = useRoute()
const store = useMealStore()
const meals = computed(() => store.$state.mealsByLetter)

function searchMealsByLetter(letter: string) {
  store.searchMealsByLetter(letter)
}

onMounted(() => {
  searchMealsByLetter(route.params.letter as string)
})

watch(
  () => route.params.letter,
  (newLetter) => {
    searchMealsByLetter(newLetter as string)
  }
)
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 mt-4">
    <RouterLink
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      >{{ letter }}</RouterLink
    >
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5" v-if="meals">
    <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-else>
    <h1>There are no meals</h1>
  </div>
</template>
