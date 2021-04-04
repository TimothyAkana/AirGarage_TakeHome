import React, { useState } from 'react';

export default function Search(props) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Location:
        <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
      </label>
    </form>
  )
}
