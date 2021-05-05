import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user/index'
import api from './modules/api/index'
import routines from './modules/routines/index'

Vue.use(Vuex);


const store = {
    modules: {
        api, routines, user
    }
}

export default new Vuex.Store({
    ...store
})
