<template>
  <div class="recipePage">
    <div class="recipe" v-if="data !== null">
      <section>
        <header>
          <h1 class="food-title">{{ data.title }}</h1>
        </header>
        <article>
          <img :src="data.img" alt="" />
          <p>
            {{ data.summary }}
          </p>
        </article>
        <footer>
          <span @click="close"> back </span>
        </footer>
      </section>
    </div>
    <div  v-else>
      {{msg}}
    </div>
  </div>
</template>

<script>
import data from '../mixins/data.js'
export default {
  data() {
    return {
      id: this.$route.params.recipeId,
      data: null,
      msg:""
    }
  },
  mixins: [data],
  methods: {
    close: function () {
      this.$router.push('/')
    },

    init(data) {
      let food = data.filter((food) => {
        if (food.id === parseInt(this.id)) {
          return food
        }
      })
      return food
    },
    generateFoodData(food) {
      console.log(food[0], 'food')
      let foodData = []
      foodData.id = food[0].id
      foodData.img = food[0].image
      foodData.title = food[0].title
      if (food[0].summary !== undefined) {
        foodData.summary = food[0].summary
      } else {
        foodData.summary =
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
      console.log(foodData)
      return foodData
    },
  },
  computed: {
    allData() {
      return this.$store.getters['get_food_data_results']()
    },
  },

  async created() {
    window.scrollTo(0, 0)
    let foods_result = await this.allData
    if (foods_result !== null) {
      let food = this.init(foods_result)
      this.data = this.generateFoodData(food)
    } else {
      console.log('null')
      //چون رسپی ها بصورت رندوم و محدوده هر بار ریکوست دیتای جدید میده.برای همین موقع رفرش صفحه نمیشه دوباره لود کرد دیتا رو
      this.msg="go back and select food again!"
    }
  },

}
</script>

<style scoped>
.recipePage {
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 9999;
  width: 100%;
  height: 96%;
  padding-top: 10%;
}

.recipe {
  width: 90%;
  margin: auto;
  background-color: #f2f2f0;
  padding: 50px;
  border-radius: 5px;
  border: 1px solid #d97c2b;
}

.food-title {
  text-align: center;
  font-size: 20pt;
  padding-bottom: 15px;
  font-family: 'Chango', cursive;
  color: #212224;
  text-shadow: 4px 5px 10px#212224;
}
p {
  overflow-y: auto;
  height: 180px;
}
img {
  width: 100%;
  margin: auto;
  left: 0;
  right: 0;
}
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-top: 40px;
}
span {
  padding: 5px;
  background: #d97c2b;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
</style>
