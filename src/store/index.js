import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user/index'

Vue.use(Vuex);


const store={
  modules:{
    api,routines,user,
  }
}

export default new Vuex.Store({

})
