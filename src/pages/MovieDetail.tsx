import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

const MovieDetail: React.FC = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [cast, setCast] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=ru-RU`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error loading movie data:", error);
        setError("Error loading movie data. Please attempt later.");
      } finally {
        setLoading(false);
      }
    };

    const fetchCredits = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=YOUR_API_KEY`);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error loading cast:", error);
        setError("Error loading cast. Please attempt later.");
      }
    };

    const fetchVideos = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=YOUR_API_KEY`);
        setVideos(response.data.results);
      } catch (error) {
        console.error("Error loading trailers:", error);
        setError("Error loading trailers. Please attempt later.");
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=YOUR_API_KEY`);
        setReviews(response.data.results);
      } catch (error) {
        console.error("Error loading reviews:", error);
        setError("Error loading reviews. Please attempt later.");
      }
    };

    if (id) {
      fetchMovie();
      fetchCredits();
      fetchVideos();
      fetchReviews();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!movie) return <div>Movie data not found.</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.overview}</p>

      {/* Review cast */}
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <ul>
          {cast.map((actor: any) => (
            <li key={actor.id}>{actor.name} as {actor.character}</li>
          ))}
        </ul>
      ) : (
        <div>Cast data not found.</div>
      )}

      {/* Review trailers */}
      <h2>Trailers</h2>
      {videos.length > 0 ? (
        <div>
          {videos.map((video: any) => (
            <div key={video.id}>
              <p>{video.name}</p>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      ) : (
        <div>Trailers not found.</div>
      )}

      {/* Review users' review */}
      <h2>Users' review</h2>
      {reviews.length > 0 ? (
        <div>
          {reviews.map((review: any) => (
            <div key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Users' review not found.</div>
      )}
    </div>
  );
};

export default MovieDetail;