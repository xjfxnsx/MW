import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar" /* style={{ textAlign: 'center', margin: '20px' } }*/>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;