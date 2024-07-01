import React from 'react';
import { format } from 'date-fns';

interface MovieCardProps {
  title: string;
  poster: string;
  releaseDate: string;
  overview: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster, releaseDate, overview }) => {
  const formattedDate = format(new Date(releaseDate), 'd MMMM yyyy');

  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <div className="movie-info">
        <h2>{title}</h2>
        <p>{formattedDate}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;