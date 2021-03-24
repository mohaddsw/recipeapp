<template>
   <div  class="recipePage">

         <div class="recipe">
<section>
      <header>
        <h1 class="food-title">title {{id}}</h1>
      </header>
      <article>
        <img src="" alt="" />
        <p>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam magni libero fugiat saepe nihil voluptas doloribus, commodi quis hic sequi consequatur impedit molestias ut delectus ducimus eaque quam architecto.
        </p>
      </article>
      <footer>
        <span @click="close"> close </span>
      </footer>
    </section>
         </div>
     
    
  </div>
 
</template>

<script>

export default {
     
  data() {
    return {
      id: this.$route.params.recipeId,
    }
  },
  methods:{
      close:function(){
      this.$router.push('/')
  }
}
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
