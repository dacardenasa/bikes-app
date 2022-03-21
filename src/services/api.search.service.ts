import axios from 'axios';
import { API_URL } from '@/constants/config';
import { IParams } from '@/interfaces/bikes.interface';

export const fetchAPI = async ({
  page,
  startDate,
  endDate,
  description,
  location,
}: IParams) => {
  const parsedParams = {
    page,
    per_page: 10,
    ...(description && { query: description }),
    ...(location && { location }),
  };
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: parsedParams,
    });
    if (response.status === 200) {
      return response.data.bikes;
    }
  } catch (error) {
    throw new Error();
  }
};
