import axios from 'axios';

const API_KEY = '93e3a8b5fbc8fa6a63ff5354739f27d9';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = () => {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
};

export const fetchMovieDetails = (id: string) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};