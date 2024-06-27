import React from 'react';
import MovieList from '../components/MovieList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Popular Movies</h1>
      <MovieList />
    </div>
  );
};

export default Home;