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
  const [page, setPage] = useState<number>(1);

  const fetchMovies = (page: number) => {
    setLoading(true);
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=93e3a8b5fbc8fa6a63ff5354739f27d9&page=${page}`)
      .then(response => {
        setMovies(prevMovies => [...prevMovies, ...response.data.results]);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const loadMoreMovies = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (error) return <div className="error">{error}</div>;

  return (
    <div>
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
      {loading && <div className="loading">Loading...</div>}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={loadMoreMovies}>Load More</button>
      </div>
    </div>
  );
};

export default MovieList;
