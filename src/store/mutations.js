/**
 * Created by  blue dong on 2017/11/27.
 */
'use strict';
import * as types from './mutation-types';
console.log(types);

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer;
  }
};
export default mutations;
