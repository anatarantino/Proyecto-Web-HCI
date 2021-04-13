import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPageLayoutLayout from '../layouts/LandingPageLayout';
import LogIn from "../views/LogIn.vue";
import SignIn from "../views/SignIn";
import DefaultLayout from "@/layouts/DefaultLayout";
import MainPage from "@/views/MainPage";
import InfoRoutine from "@/views/InfoRoutine";
import MyProfileEdit from "@/views/MyProfileEdit";
import MyProfileConfig from "@/views/MyProfileConfig";
import MyProfileEjs from "@/views/MyProfileEjs";
import MyProfileTrophies from "@/views/MyProfileTrophies";
import MyProfile from "../views/MyProfile";
import CreateExercise from "@/views/CreateExercise";
import CreateRoutine from "@/views/CreateRoutine";
import EditRoutine from "../views/EditRoutine"
import EditExercise from "@/views/EditExercise";

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
      },
      {
        path:'/info',
        name:'infoRoutine',
        component: InfoRoutine
      },
      {
        path:'/myprofile',
        name:'MyProfile',
        component: MyProfile
      },
      {
        path:'/myprofileedit',
        name:'MyProfileEdit',
        component: MyProfileEdit
      },
      {
        path:'/myprofileconfig',
        name:'MyProfileConfig',
        component: MyProfileConfig
      },
      {
        path:'/myprofileejs',
        name:'MyProfileEjs',
        component: MyProfileEjs
      },
      {
        path:'/myprofiletrophies',
        name:'MyProfileTrophies',
        component: MyProfileTrophies
      },
      {
        path:'/createroutine',
        name:'CreateRoutine',
        component: CreateRoutine
      },
      {
        path:'/editroutine',
        name:'editRoutine',
        component: EditRoutine
      },
      {
        path:'/createexercise',
        name:'createExercise',
        component: CreateExercise
      },
      {
        path:'/editexercise',
        name:'editExercise',
        component: EditExercise
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
