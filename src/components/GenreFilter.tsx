import React, { useEffect, useState } from 'react';
import { fetchGenres } from '../services/api';

interface Genre {
  id: number;
  name: string;
}

interface GenreFilterProps {
  onGenreSelect: (genreId: number | null) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    fetchGenres().then(setGenres);
  }, []);

  return (
    <div className="genre-filter">
      <select onChange={(e) => onGenreSelect(Number(e.target.value))}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;