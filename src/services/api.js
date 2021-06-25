import axios from 'axios';
import config from '../config/index';

const searchProductURL = `${config.apiUrl}/api/history-price`
export const searchDates = async (data) => {
  try {
    const response = await axios.post(searchProductURL, { productUrl: data.link });
    return response.data;
  } catch (error) {
    console.log(error);
  }

}