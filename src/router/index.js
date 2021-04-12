import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPageLayoutLayout from '../layouts/LandingPageLayout';
import LogIn from "../views/LogIn.vue";
import SignIn from "../views/SignIn";
import DefaultLayout from "@/layouts/DefaultLayout";
import MainPage from "@/views/MainPage";

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component: LandingPageLayoutLayout,
    children:[
      {
        path:'',
        name:'MainPage',
        component:MainPage
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
  {
    path:'/home',
    component: DefaultLayout,
    children: [
      {
        path:'',
        name:'Home',
        component: Home
      }
    ]
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
