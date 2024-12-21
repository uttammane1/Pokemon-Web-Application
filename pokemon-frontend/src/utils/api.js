import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/pokemon';

export const fetchPokemon = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};
