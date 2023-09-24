import { axiosClient } from '@/axiosClient'
import { defineStore } from 'pinia'

type Meal = {
  [key: string]: string
}

export const useMealStore = defineStore('meal', {
  state: () => ({
    loading: false,
    searchedMeals: [] as Meal[],
    mealsByLetter: [] as Meal[],
    randomMeals: [] as Meal[]
  }),
  actions: {
    async searchMeals(keyword: string) {
      try {
        const response = await axiosClient.get(`/search.php?s=${keyword}`)
        this.setSearchedMeals(response.data.meals)
      } catch (error) {
        console.error('Error searching meals:', error)
      }
    },
    async searchMealsByLetter(letter: string) {
      try {
        const response = await axiosClient.get(`/search.php?f=${letter}`)
        this.setMealsByLetter(response.data.meals)
      } catch (error) {
        console.error('Error searching meals:', error)
      }
    },
    async getRandomMeals() {
      try {
        this.loading = true
        const randomMeals = [] as Meal[]
        for (let index = 0; index < 10; index++) {
          const response = await axiosClient.get(`/random.php`)
          if (response.data.meals && response.data.meals.length > 0) {
            randomMeals.push(response.data.meals[0])
          }
        }
        console.log(randomMeals)
        this.setRandomMeals(randomMeals)
      } catch (error) {
        console.error('Error fetching random meals:', error)
      } finally {
        this.loading = false
      }
    },
    setSearchedMeals(meals: Meal[]) {
      this.searchedMeals = meals
    },
    setMealsByLetter(meals: Meal[]) {
      this.mealsByLetter = meals
    },
    setRandomMeals(meals: Meal[]) {
      this.randomMeals = meals
    }
  }
})
