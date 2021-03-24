import Vue from "vue";
import VueRouter from "vue-router";
import recipePage from '../pages/recipe/_recipeId.vue'


Vue.use(VueRouter);

const routes = [
  {
    path:'/recipe/:recipeId',
    component:recipePage

  }

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
