import React from 'react';
import { useMovies } from '../context/MovieContext';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';
import SortFilter from './SortFilter';

const MovieList: React.FC = () => {
  const { movies, loading, error, query, genreId, sortOption, setQuery, setGenreId, setSortOption, loadMoreMovies } = useMovies();

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const handleGenreSelect = (genreId: number | null) => {
    setGenreId(genreId);
  };

  const handleSortSelect = (sortOption: string) => {
    setSortOption(sortOption);
  };

  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <GenreFilter onGenreSelect={handleGenreSelect} />
      <SortFilter onSortSelect={handleSortSelect} />
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
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
