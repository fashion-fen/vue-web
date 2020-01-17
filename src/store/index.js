//状态管理

import Vue from 'vue'

import Vuex from 'vuex'
 //import good from './model/good'
 import user from './model/user'
Vue.use(Vuex)   // 注册

// 仓库、数据中心、总部
const store = new Vuex.Store({
  modules: {
   // good
   user
  }
})

export default store