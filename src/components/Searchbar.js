import React, { useState, useEffect } from 'react';

function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm.length >= 3 || searchTerm === '') {
      const searchTimeout = setTimeout(() => {
        onSearch(searchTerm);
      }, 300);

      return () => clearTimeout(searchTimeout);
    }
  }, [searchTerm, onSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="flex items-center justify-center p-5 bg-white">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-3 py-2 w-[500px] text-black"
      />
    </form>
  );
}

export default Searchbar;
