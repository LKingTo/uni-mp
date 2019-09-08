import { isNaN } from 'lodash-es';

/**
 * @filter 百分比filter，将数字转换成百分比
 * @param value      {Number}      数字，未转化的
 * @param [digits]   {Number}      转化成百分比数字所携带的小数点，默认2
 * @param [simply]  {Boolean}      当百分比为零时是否不显示百分号%，默认为false
 */
const name = 'percent';
const fn = (value, digits = 2, simply) => {
  if (simply && value === 0) {
    return value;
  }
  const number = value * 100;
  if (isNaN(number)) {
    return '--';
  }
  let result;
  if (digits === 0) {
    result = `${number.toFixed(0)}%`;
  } else {
    const newDigits = parseInt(String(digits), 0) || 2;
    result = `${number.toFixed(newDigits)}%`;
  }
  return result;
};

const filter = {
  install(Vue) {
    Vue.filter(name, fn);
  },
};

export default filter;
