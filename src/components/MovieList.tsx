import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY')
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          releaseDate={movie.release_date}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default MovieList;