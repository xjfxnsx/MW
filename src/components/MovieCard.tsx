import React from 'react';
import { format } from 'date-fns';
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
  console.log(releaseDate);

  const formattedDate =
  releaseDate === ""
  ? "No Date"
  : format(new Date(releaseDate), 'd MMMM yyyy');

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