import React, { useState, useEffect } from 'react';
import './SearchBar.css';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  const updateSearchHistory = (newQuery: string) => {
    const updatedHistory = [...searchHistory, newQuery].slice(-5);
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
      updateSearchHistory(query);
      setQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSelectHistoryItem = (item: string) => {
    setQuery(item);
    onSearch(item);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for a movie..."
        list="search-history-list" 
      />
      <button onClick={handleSearch}>Search</button>
      
      {searchHistory.length > 0 && (
        <datalist id="search-history-list">
          {searchHistory.map((item, index) => (
            <option key={index} value={item} onClick={() => handleSelectHistoryItem(item)} />
          ))}
        </datalist>
      )}
    </div>
  );
};

export default SearchBar;
