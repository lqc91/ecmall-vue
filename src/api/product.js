import jsonp from 'assets/js/jsonp';
import { TIMEOUT } from './config';

export const getProductDetail = (itemNumId) => {
  const url = 'https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';
  const params = {
    api: 'mtop.taobao.detail.getdetail',
    ttid: '2017@taobao_h5_9.9.0',
    data: '%7B"itemNumId"%3A%22' + itemNumId + '%22%2C"fromJhsH5"%3A"1"%7D',
    appKey: 12574478,
    dataType: 'jsonp',
    type: 'jsonp',
    v: '6.0'
  };

  return jsonp(url, params, { timeout: TIMEOUT, prefix: 'define', name: 'define' }).then(res => {
    if (res.data != null) {
      return res.data;
    }

    throw new Error('没有成功获取到数据');
  }).catch(err => {
    console.log(err);
  });
};

export const getProductBaseInfo = (itemId, juId) => {
  const url = 'https://detail.ju.taobao.com/detail/json/mobile_dynamic.do';
  const params = {
    item_id: itemId,
    groupId: '',
    sales_site: 1,
    pinExtra: '',
    juId: juId,
    _: 1576400872869
  };

  return jsonp(url, params, {
    timeout: TIMEOUT, prefix: 'jsonp'
  }).then(res => {
    if (res.item != null) {
      return res.item;
    }

    throw new Error('没有成功获取到数据');
  }).catch(err => {
    console.log(err);
  });
};

export const calcTimeLeft = (startTime, endTime) => {
  let timeLeft = {};
  let msTimeLeft = 0;
  let quotient = 0; // 商
  const curTime = Date.now();
  if (curTime > startTime && curTime < endTime) {
    msTimeLeft = endTime - curTime;
    timeLeft.tenMs = Math.floor((msTimeLeft % 1000) / 100);
    quotient = Math.floor(msTimeLeft / 1000); // socends
    timeLeft.seconds = quotient % 60;
    quotient = Math.floor(quotient / 60); // minutes
    timeLeft.minutes = quotient % 60;
    timeLeft.hours = Math.floor(quotient / 60); // hours
  }
  for (let key in timeLeft) {
    if (timeLeft[key] < 10) {
      timeLeft[key] = '0' + timeLeft[key];
    }
  }
  return timeLeft;
};
