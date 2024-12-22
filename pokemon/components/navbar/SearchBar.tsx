"use client"

import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/lib/features/search/searchSlice'; // Adjust the import path if necessary

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon by name"
        onChange={handleSearchChange}
        // style={{ padding: '10px', width: '100%', maxWidth: '300px', marginBottom: '20px' }}
        className='p-3 w-80 border rounded-md'
      />
    </div>
  );
};

export default SearchBar;
