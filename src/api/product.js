import jsonp from 'assets/js/jsonp';
import { TIMEOUT } from './config';

export const getProductDetail = (itemNumId) => {
  const url = 'https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';
  const params = {
    api: 'mtop.taobao.detail.getdetail',
    ttid: '2017@taobao_h5_9.9.0',
    data: encodeURIComponent(`{"itemNumId":"${itemNumId}","fromJhsH5": "1"}`),
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

export const getProductDetailPic = (itemId) => {
  const url = 'https://detail.ju.taobao.com/detail/item_new_desc.json';
  const params = {
    item_id: itemId,
    _: 1576665598996
  };

  return jsonp(url, params, { timeout: TIMEOUT, prefix: '', name: 'descnew' }).then(res => {
    if (res.success) {
      const picArr = [];
      res.model.children.forEach(value => {
        if (value.params.picUrl) {
          picArr.push(value.params.picUrl);
        }
      });
      return picArr;
    }

    throw new Error('没有成功获取到数据');
  }).catch(err => {
    console.log(err);
  });
};

export const getProductRateList = (itemId, pageNo = 1, pageSize = 10) => {
  const url = 'https://h5api.m.taobao.com/h5/mtop.wdetail.getitemrates/3.0/';
  const params = {
    jsv: '2.4.3',
    appKey: 12574478,
    t: 1576743537473,
    sign: '5eb94b5f93593a821eb286199ea56245', // 验证信息，不断变更，无法获取
    api: 'mtop.wdetail.getitemrates',
    v: '3.0',
    dataType: 'jsonp',
    type: 'jsonp',
    ttid: '2017@taobao_h5_6.6.0',
    data: encodeURIComponent(`{"auctionNumId":"${itemId}","hasRateContent":1,"hasPic":1,"pageNo":${pageNo},"pageSize":${pageSize},"rateType":"","expression":""}`)
  };

  return jsonp(url, params, { timeout: TIMEOUT, prefix: '', name: 'mtopjsonp3' }).then(res => {
    if (res.data != null) {
      return res.data;
    }

    throw new Error('没有成功获取到数据');
  }).catch(err => {
    console.log(err);
  });
};
