import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail: React.FC = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;