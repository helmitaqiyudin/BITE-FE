import React, { useState } from 'react';

function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="flex items-center justify-center p-5 bg-white" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-3 py-2 w-[500px] text-black"
      />
      <button type="submit" className="ml-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
