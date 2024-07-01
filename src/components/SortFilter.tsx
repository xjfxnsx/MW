import React from 'react';

interface SortFilterProps {
  onSortSelect: (sortOption: string) => void;
}

const SortFilter: React.FC<SortFilterProps> = ({ onSortSelect }) => {
  return (
    <div className="sort-filter">
      <select onChange={(e) => onSortSelect(e.target.value)}>
        <option value="">Default</option>
        <option value="popularity.desc">Popularity Descending</option>
        <option value="popularity.asc">Popularity Ascending</option>
        <option value="release_date.desc">Release Date Descending</option>
        <option value="release_date.asc">Release Date Ascending</option>
        <option value="vote_average.desc">Vote Average Descending</option>
        <option value="vote_average.asc">Vote Average Ascending</option>
      </select>
    </div>
  );
};

export default SortFilter;