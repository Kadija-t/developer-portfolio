// import axios from 'axios';

// const API_URL = 'http://localhost:1337/home';

// export const fetchHomeData = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/home`);
//     return response.data;
//   } catch (error) {
//     console.error('Erreur lors de la récupération des données de Home:', error);
//     return null;
//   }
// };

import axios from 'axios';

//  backend déployé sur Heroku
const API_URL = 'https://my-portfolio-dev-73b66405d644.herokuapp.com/';

export const fetchHomeData = async () => {
  try {
    //  bonne route pour les données
    const response = await axios.get(`${API_URL}/api/home`); 
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de Home:', error);
    return null;
  }
};
