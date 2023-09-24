<script setup lang="ts">
import MealCard from '@/components/MealCard.vue'
import { useMealStore } from '@/stores/meal'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const keyword = ref('')
const route = useRoute()
const store = useMealStore()
const meals = computed(() => store.$state.searchedMeals)

function searchMeals() {
  store.searchMeals(keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name as string
  if (keyword.value) {
    searchMeals()
  }
})
</script>

<template>
  <div>
    <input
      type="text"
      class="border-slate-500 border-2 rounded-md p-2 w-full"
      placeholder="Search your favorite meals"
      v-model="keyword"
      @change="searchMeals"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5" v-if="meals">
      <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-else>
      <h1>There are no meals</h1>
    </div>
  </div>
</template>
