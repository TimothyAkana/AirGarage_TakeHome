import React, { useState } from 'react';

export default function Search({ searchLocation }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchLocation(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Location:
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </label>
    </form>
  )
}
