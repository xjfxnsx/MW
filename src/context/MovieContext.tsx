import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

type MovieContextType = {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  query: string;
  genreId: number | null;
  sortOption: string;
  page: number;
  setQuery: (query: string) => void;
  setGenreId: (genreId: number | null) => void;
  setSortOption: (sortOption: string) => void;
  loadMoreMovies: () => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [genreId, setGenreId] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<string>('');

  useEffect(() => {
    const fetchMoviesData = () => {
      setLoading(true);
      fetchMovies(page, query, genreId, sortOption)
        .then(response => {
          if (page === 1) {
            setMovies(response);
          } else {
            setMovies(prevMovies => [...prevMovies, ...response]);
          }
          setLoading(false);
        })
        .catch(() => {
          setError('Error fetching data');
          setLoading(false);
        });
    };

    fetchMoviesData();
  }, [page, query, genreId, sortOption]);

  const loadMoreMovies = () => setPage(prevPage => prevPage + 1);

  return (
    <MovieContext.Provider value={{ movies, loading, error, query, genreId, sortOption, page, setQuery, setGenreId, setSortOption, loadMoreMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovies must be used within a MovieProvider');
  }
  return context;
};