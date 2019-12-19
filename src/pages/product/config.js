export const sliderOptions = {
  direction: 'horizontal',
  loop: true,
  interval: 3000,
  pagination: true
};

export const detailSliderOptions = {
  direction: 'horizontal',
  loop: false,
  interval: 0,
  pagination: true,
  clickable: true,
  renderBullet: function (index, className) {
    let text = '';
    // eslint-disable-next-line quotes
    switch (index) {
    case 0: text = '详情'; break;
    case 1: text = '评价'; break;
    case 2: text = '参数'; break;
    }
    return `<span class="${className}">` + text + '</span>';
  }
};
