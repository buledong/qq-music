/**
 * Created by  blue dong on 2017/11/27.
 */
'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';
import * as getters from './getters';
import state from './state';
import createLogger from 'vuex/dist/logger';

const debug = process.env.NODE_ENV !== 'production';
Vue.use(Vuex);
export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state,
  plugins: debug ? [createLogger()] : [],
  strict: debug
});
