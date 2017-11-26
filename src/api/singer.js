/**
 * Created by  blue dong on 2017/11/25.
 */

'use strict';
import jsonp from 'common/js/jsonp';
import {commonParams, options} from './config';

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
  // https://c.y.qq.com/v8/fcg-bin/v8.fcg
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  });
  return jsonp(url, data, options);
}
