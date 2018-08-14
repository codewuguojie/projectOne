/**
 * Created by huamin on 2018/4/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
	"isHeader":'多点小贷'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: debug ? [createLogger()] : []  //  vuex日志插件
})
