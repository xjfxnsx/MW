import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = () => {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
};

export const fetchMovieDetails = (id: string) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};