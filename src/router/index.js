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
import store from '../store/index'

Vue.use(VueRouter)


const routes = [
    {
        path: '',
        component: LandingPageLayoutLayout,
        children: [
            {
                meta: {unauth: true},
                path: '',
                name: 'MainPage',
                component: MainPage
            },
            {
                meta: {unauth: true},
                path: '/signup',
                name: 'SignUp',
                component: SignUp
            },
            {
                meta: {unauth: true},
                path: '/signin',
                name: 'SignIn',
                component: SignIn
            },
            {
                meta: {unauth: true},
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
                meta: {auth: true},
                path: '',
                name: 'Home',
                component: Home
            },
            {
                meta: {auth: true},
                path: 'exploreroutines',
                name: 'ExploreRoutines',
                component: ExploreRoutines
            },
            {
                meta: {auth: true},
                path: 'myroutines',
                name: 'MyRoutines',
                component: MyRoutines
            },
            {
                meta: {auth: true},
                path: 'info',
                name: 'infoRoutine',
                component: InfoRoutine
            },
            {
                meta: {auth: true},
                path: 'myprofile',
                name: 'MyProfile',
                component: MyProfile
            },
            {
                meta: {auth: true},
                path: 'createroutine',
                name: 'CreateRoutine',
                component: CreateRoutine
            },
            {
                meta: {auth: true},
                path: 'editroutine',
                name: 'editRoutine',
                component: EditRoutine
            },
            {
                meta: {auth: true},
                path: 'createexercise',
                name: 'createExercise',
                component: CreateExercise
            },
            {
                meta: {auth: true},
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

store.dispatch('autoLogIn').catch((e) => {
    console.log(e);
});

// router.beforeEach(function (to, from, next) {
//   if (to.meta.auth && !store.getters['isOK']) {
//     next('/');
//   } else if (to.meta.unauth && store.getters['isOK']) {
//     next('/home');
//   } else {
//     next();
//   }
// });

export default router
