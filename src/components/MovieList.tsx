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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=93e3a8b5fbc8fa6a63ff5354739f27d9')
      .then(response => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

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