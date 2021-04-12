import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MainPage.vue'
import LandingPageLayoutLayout from '../layouts/LandingPageLayout';
import LogIn from "../views/LogIn.vue";
import SignIn from "../views/SignIn";

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component: LandingPageLayoutLayout,
    children:[
      {
        path:'',
        name:'Home',
        component:Home
      },
      {
        path: '/login',
        name:'LogIn',
        component: LogIn
      },
      {
        path: '/signin',
        name:'SignIn',
        component: SignIn
      }
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
