import React from 'react';
import MovieList from '../components/MovieList';

const Home: React.FC = () => {
  return (
    <div>
      <h1 style={{margin: '10px 100px', color: 'black', cursor: 'default'}}>Movie</h1>
      <h1 style={{margin: '-10px 100px 10px 100px', color: 'white', cursor: 'default'}}>Watch</h1>
      <MovieList />
    </div>
  );
};

export default Home;