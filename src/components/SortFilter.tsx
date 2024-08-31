import React from 'react';
import './SortFilter.css';

type SortFilterProps = {
  onSortSelect: (sortOption: string) => void;
}

const SortFilter: React.FC<SortFilterProps> = ({ onSortSelect }) => {
  return (
    <div className="sort-filter">
      <select onChange={(e) => onSortSelect(e.target.value)}>
        <option value="popularity.desc">Populars First</option>
        <option value="release_date.desc">Release Date: the latest</option>
        <option value="release_date.asc">Release Date: the earliest</option>
      </select>
    </div>
  );
};

export default SortFilter;