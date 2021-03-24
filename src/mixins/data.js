import axios from 'axios'
export default {
  data() {
    return {
      random_recipe: [],
    }
  },
  methods: {
    getSearchDataResults(foodName) {
      axios
        .get(
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=e5d2cb21ed164c038349089b8a14d873' +
            foodName +
            '&number=4'
        )
        .then((res) => {
          let data = res.data.results
          this.$store.dispatch('set_food_data_results', data)
        })
    },

    generateRandomRecipe(recipes) {
      recipes.map((recipe) => {
        this.random_recipe.push(recipe)
      })
    },
  },
  created() {
    axios
      .get(
        'https://api.spoonacular.com/recipes/random?apiKey=e5d2cb21ed164c038349089b8a14d873&number=4'
      )
      .then((res) => {
        this.generateRandomRecipe(res.data.recipes)
        this.$store.dispatch('set_food_data_results', this.random_recipe)
      })
  },
}
