import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import './App.css';
import { MovieProvider } from './context/MovieContext';

const App: React.FC = () => {
  return (
    <MovieProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
    </MovieProvider>
  );
};

export default App;