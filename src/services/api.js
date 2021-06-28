import axios from 'axios';
import config from '../config/index';

const searchProductURL = `${config.apiUrl}/api/history-price`;
const avgProductURL = `${config.apiUrl}/api/history-price/avg`;

export const searchDates = async (data) => {
  try {
    const response = await axios.post(searchProductURL, { productUrl: data.link });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const searchAvg = async (data) => {
  try {
    const response = await axios.post(avgProductURL, {productUrl: data.link});
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};