import axios from 'axios';

const API_KEY = '47432797-7b7ae49ed8d9ca3634e43854b';
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Функція для виконання запиту до Pixabay API.
 * @param {string} query - пошуковий запит.
 * @returns {Promise<Array>} - список зображень.
 */
export const fetchImages = async (query) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${params}`);
    return response.data.hits;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};
