import axios from 'axios';
import config from '../config/index';

const searchProductURL = `${config.apiUrl}/`
export const searchDates = async (data) => {
  try {
    const response = await axios.get(searchProductURL);
    return response.data;
  } catch (error) {
    console.log(error);
  }

}