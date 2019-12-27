import axios from 'axios';

export const getCartList = () => {
  return axios.get('/mock/cart.json').then(response => {
    return response.data.data;
  });
};
