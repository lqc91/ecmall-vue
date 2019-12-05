import axios from 'axios';
import { TIMEOUT } from './config';

// 获取热门搜索数据--ajax
export const getSearchHotKeyWord = () => {
  return axios.get('http://www.imooc.com/api/search/hot', {
    timeout: TIMEOUT
  }).then(res => {
    res = res.data.hotKeyWord;
    if (res && res.owner) { // succed
      return res.owner;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
};
