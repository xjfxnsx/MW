import React from 'react';
import MovieList from '../components/MovieList';

const Home: React.FC = () => {
  return (
    <div>
      <h1 style={{margin: '10px 50px', color: 'black'}}>Movie</h1>
      <h1 style={{margin: '-10px 50px', color: 'white'}}>Watch</h1>
      <MovieList />
    </div>
  );
};

export default Home;