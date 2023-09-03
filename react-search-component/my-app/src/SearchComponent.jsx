import { useState } from 'react';

export default function SearchComponent({ list }) {
  const [search, setSearch] = useState('');

  function filter() {
    const filtered = list.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.length === 0 ? ['No items match the filter.'] : filtered;
  }

  return (
    <>
      <SearchBar
        search={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <SearchItems list={list} filtered={filter()} />
    </>
  );
}

function SearchBar({ search, onChange }) {
  return <input value={search} onChange={onChange} placeholder="search" />;
}

function SearchItems({ filtered }) {
  return (
    <ul>
      {filtered.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
