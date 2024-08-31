import React from 'react';
import { format, isValid } from 'date-fns';
import './MovieCard.css';
import { Link } from 'react-router-dom';

export interface MovieCardProps {
  id: number;
  title: string;
  poster: string;
  releaseDate: string;
  overview: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster,
  releaseDate,
  overview,
}) => {

  const date = new Date(releaseDate);
  const formattedDate = isValid(date)
    ? format(date, 'd MMMM yyyy')
    : 'No Date';

  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`} className="link-no-underline">
        <img src={poster} alt={title} />
        <h2>{title}</h2>
      <div className="movie-info">
        <p>{formattedDate}</p>
        <p>{overview}</p>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;