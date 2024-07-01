import axios from 'axios';

const API_KEY = '93e3a8b5fbc8fa6a63ff5354739f27d9';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return response.data.genres;
};

export const fetchMovies = async (page: number, query: string = '', genreId: number | null = null) => {
  const url = query
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    : `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}${genreId ? `&with_genres=${genreId}` : ''}`;
  const response = await axios.get(url);
  return response.data.results;
};