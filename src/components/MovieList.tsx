import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';

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
  const [query, setQuery] = useState<string>('');
  const [genreId, setGenreId] = useState<number | null>(null);

  const fetchMoviesData = (page: number, query: string = '', genreId: number | null = null) => {
    setLoading(true);
    fetchMovies(page, query, genreId)
      .then(response => {
        if (page === 1) {
          setMovies(response);
        } else {
          setMovies(prevMovies => [...prevMovies, ...response]);
        }
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMoviesData(page, query, genreId);
  }, [page, query, genreId]);

  const handleSearch = (query: string) => {
    setQuery(query);
    setPage(1);
    fetchMoviesData(1, query, genreId);
  };

  const handleGenreSelect = (genreId: number | null) => {
    setGenreId(genreId);
    setPage(1);
    fetchMoviesData(1, query, genreId);
  };

  const loadMoreMovies = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <GenreFilter onGenreSelect={handleGenreSelect} />
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