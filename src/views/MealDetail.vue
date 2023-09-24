<script setup lang="ts">
import { axiosClient } from '@/axiosClient'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mealId = ref(route.params.id)

const mealDetails = ref()

onMounted(async () => {
  try {
    const response = await axiosClient.get(`/lookup.php?i=${mealId.value}`)
    mealDetails.value = response.data.meals[0]
  } catch (error) {
    console.error('Error searching meals:', error)
  }
})
</script>

<template>
  <div class="container px-5 mx-auto">
    <div class="">
      <div class="text-center mb-10">
        <h1 class="font-extrabold text-5xl">{{ mealDetails?.strMeal }}</h1>
        <div class="flex justify-center gap-5 mt-3 mb-10">
          <p v-if="mealDetails?.strCategory">Category: {{ mealDetails?.strCategory }}</p>
          <p v-if="mealDetails?.strArea">Area: {{ mealDetails?.strArea }}</p>
          <p v-if="mealDetails?.strTags">Tags: {{ mealDetails?.strTags }}</p>
        </div>
        <div class="flex justify-center gap-2">
          <a
            class="bg-red-600 rounded-full px-5 py-3 text-white hover:bg-red-700"
            :href="mealDetails?.strYoutube"
            target="_blank"
            >Watch on Youtube</a
          >
          <a
            class="border-2 border-red-600 text-red-600 rounded-full px-5 py-3 hover:bg-gray-100"
            :href="mealDetails?.strSource"
            target="_blank"
            v-if="mealDetails?.strSource"
            >Source</a
          >
        </div>
      </div>

      <div class="mx-auto p-8 rounded-md shadow-md mb-10 flex flex-wrap">
        <img
          class="lg:w-1/2 w-full object-cover object-center"
          :src="mealDetails?.strMealThumb"
          :alt="mealDetails?.strMeal"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col">
          <div class="flex flex-wrap gap-5 mb-5">
            <div>
              <h1 class="text-gray-900 text-3xl font-medium mb-1">Ingredients</h1>
              <ul>
                <div v-for="(el, ind) of new Array(20)" v-bind:key="ind">
                  <li v-if="mealDetails && mealDetails[`strIngredient${ind + 1}`]">
                    {{ ind + 1 }}. {{ mealDetails[`strIngredient${ind + 1}`] }} ({{
                      mealDetails[`strMeasure${ind + 1}`]
                    }})
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <h1 class="text-gray-900 text-3xl font-medium mb-1">Instructions</h1>
          <p>{{ mealDetails?.strInstructions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
