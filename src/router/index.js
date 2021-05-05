import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPageLayoutLayout from '../layouts/LandingPageLayout';
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn";
import DefaultLayout from "@/layouts/DefaultLayout";
import MainPage from "@/views/MainPage";
import InfoRoutine from "@/views/InfoRoutine";
import MyProfile from "../views/MyProfile";
import CreateExercise from "@/views/CreateExercise";
import CreateRoutine from "@/views/CreateRoutine";
import EditRoutine from "../views/EditRoutine"
import EditExercise from "@/views/EditExercise";
import ExploreRoutines from "@/views/ExploreRoutines";
import MyRoutines from "@/views/MyRoutines";
import VerifyAccount from "@/views/VerifyAccount";

Vue.use(VueRouter)


const routes = [
    {
        path: '',
        component: LandingPageLayoutLayout,
        children: [
            {
                path: '',
                name: 'MainPage',
                component: MainPage
            },
            {
                path: '/signup',
                name: 'SignUp',
                component: SignUp
            },
            {
                path: '/signin',
                name: 'SignIn',
                component: SignIn
            },
            {
                path: '/verify',
                name: 'VerifyAccount',
                component: VerifyAccount
            }
        ]
    },
    {
        path: '/home',
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: 'exploreroutines',
                name: 'ExploreRoutines',
                component: ExploreRoutines
            },
            {
                path: 'myroutines',
                name: 'MyRoutines',
                component: MyRoutines
            },
            {
                path: 'info',
                name: 'infoRoutine',
                component: InfoRoutine
            },
            {
                path: 'myprofile',
                name: 'MyProfile',
                component: MyProfile
            },
            {
                path: 'createroutine',
                name: 'CreateRoutine',
                component: CreateRoutine
            },
            {
                path: 'editroutine',
                name: 'editRoutine',
                component: EditRoutine
            },
            {
                path: 'createexercise',
                name: 'createExercise',
                component: CreateExercise
            },
            {
                path: 'editexercise',
                name: 'editExercise',
                component: EditExercise
            }

        ]
    },
    {
        path: '*',
        redirect: '/Error404',
        component: () => import('../layouts/LandingPageLayout'),
        children: [
            {
                path: '',
                name: 'PageNotFound',
                component: () => import('../views/NotFound.vue')
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
