<template>
  <div v-show="openDialog" class="recipe">
    <section>
      <header>
        <h1 class="food-title">food title</h1>
      </header>
      <article>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          quo assumenda et ex, recusandae, vitae provident eum delectus nam,
          molestias possimus. Aliquid odit molestias aspernatur exercitationem.
          Accusamus cumque unde laboriosam!
        </p>
      </article>
      <footer>
        <span @click="close"> close </span>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
    props:["openDialog"],
  methods: {
    close: function () {
        this.$emit("showDialog",false)
    },
  },
}
</script>

<style scoped>
.recipe {
  max-width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f2f2f0;
  padding: 50px;
  border-radius: 50px;
  box-shadow: 0px 0px 100px 20px#D97C2B;
  border: 1px solid #d97c2b;
}

.food-title {
  text-align: center;
  font-size: 40pt;
  padding-bottom: 15px;
  font-family: 'Chango', cursive;
  color: #212224;
  text-shadow: 4px 5px 10px#212224;
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
