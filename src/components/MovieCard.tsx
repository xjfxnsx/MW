import React from 'react';

interface MovieCardProps {
  title: string;
  poster: string;
  releaseDate: string;
  overview: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster, releaseDate, overview }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <p>{releaseDate}</p>
      <p>{overview}</p>
    </div>
  );
};

export default MovieCard;