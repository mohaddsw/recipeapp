<template>
  <div class="recipe-foods">
    <h1>Food Recipes</h1>

    <div class="recipe-items">
      <div class="item" @click="openRecipe">
        <div class="img-food">
          <img src="../assets/image/banner.jpg" alt="" />
        </div>

        <div class="food-recipe">
          <div class="food-title">
            <h3>Food title</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            quia magni necessitatibus facere asperiores distinctio si
          </p>
        </div>
      </div>
      <div class="item" @click="openRecipe">
        <div class="img-food">
          <img src="../assets/image/banner.jpg" alt="" />
        </div>

        <div class="food-recipe">
          <div class="food-title">
            <h3>Food title</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            quia magni necessitatibus facere asperiores distinctio si
          </p>
        </div>
      </div>
      <div class="item" @click="openRecipe">
        <div class="img-food">
          <img src="../assets/image/banner.jpg" alt="" />
        </div>

        <div class="food-recipe">
          <div class="food-title">
            <h3>Food title</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            quia magni necessitatibus facere asperiores distinctio si
          </p>
        </div>
      </div>


       <div class="item" @click="openRecipe">
        <div class="img-food">
          <img src="../assets/image/banner.jpg" alt="" />
        </div>

        <div class="food-recipe">
          <div class="food-title">
            <h3>Food title</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            quia magni necessitatibus facere asperiores distinctio si
          </p>
        </div>
      </div>
      <div class="item" @click="openRecipe">
        <div class="img-food">
          <img src="../assets/image/banner.jpg" alt="" />
        </div>

        <div class="food-recipe">
          <div class="food-title">
            <h3>Food title</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            quia magni necessitatibus facere asperiores distinctio si
          </p>
        </div>
      </div>
      <div class="item" @click="openRecipe">
        <div class="img-food">
          <img src="../assets/image/banner.jpg" alt="" />
        </div>

        <div class="food-recipe">
          <div class="food-title">
            <h3>Food title</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            quia magni necessitatibus facere asperiores distinctio si
          </p>
        </div>
      </div>
     
    </div>
     <!-- show recipe diolog -->
      <recipe @showDialog="close($event)" :openDialog="show_recipe_dialog" />
  </div>
</template>
<script>
import recipe from './Food-recipe'
export default {
  components: {
    recipe,
  },
  data() {
    return {
      show_recipe_dialog: false,
    }
  },
  methods: {
    openRecipe: function () {
      this.show_recipe_dialog = true
    },
    close(event) {
      this.show_recipe_dialog = event
    },
  },
}
</script>

<style scoped>
.recipe-foods {
  width: 100%;
}
.recipe-foods h1 {
  width: 100%;
  text-align: center;
  color: #212224;
  font-size: 50px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 4px 5px 10px#212224;
  margin: 30px 0;
  font-family: 'Chango', cursive;
}
.recipe-foods .recipe-items {
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 30px 0;
}

.recipe-foods .recipe-items .item {
  width: 100%;
  border-radius: 50px 0;
  overflow: hidden;
  background-color: #f2f2f0;
  box-shadow: 0px 0px 15px 3px#D97C2B;
  transition: all 0.5s ease-in-out;
  opacity: 1;
}
.recipe-foods .recipe-items .item:hover {
  cursor: pointer;
  opacity: 0.7;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .recipe-foods h1 {
    font-size: 20px;
  }
  .recipe-foods .recipe-items {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .recipe-foods h1 {
    font-size: 20px;
  }
  .recipe-foods .recipe-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .recipe-foods h1 {
    font-size: 40px;
  }
  .recipe-foods .recipe-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .recipe-foods h1 {
    font-size: 40px;
  }
  .recipe-foods .recipe-items {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .recipe-foods h1 {
    font-size: 50px;
  }
  .recipe-foods .recipe-items {
    grid-template-columns: repeat(3, 1fr);
  }
}

.recipe-foods .recipe-items .item .img-food img {
  width: 100%;
}
.recipe-foods .recipe-items .item .food-title {
  position: absolute;
  top: -28px;
  text-align: center;
  width: 100%;
  right: 0;
}
.recipe-foods .recipe-items .item .food-title h3 {
  background: blur(30);
  width: 70%;
  margin: auto;
  border-radius: 50px;
  padding: 10px 0;
  color: #f2f2f0;
  background-color: #d97c2b;
}
.recipe-foods .recipe-items .item .food-recipe {
  padding: 15px;
  position: relative;
}
.recipe-foods .recipe-items .item .food-recipe p {
  padding: 20px 0;
}
</style>
