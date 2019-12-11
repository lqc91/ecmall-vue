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
