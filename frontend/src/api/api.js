import axios from 'axios';

const API_URL = 'http://localhost:1337/home';

export const fetchHomeData = async () => {
  try {
    const response = await axios.get(`${API_URL}/home`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de Home:', error);
    return null;
  }
};
