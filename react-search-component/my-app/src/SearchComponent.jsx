import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import { useState } from 'react';

export default function SearchComponent({ list }) {
  const [typed, setTyped] = useState('');

  function filter() {
    const filtered = list.filter((statement) =>
      statement.toLowerCase().includes(typed.toLowerCase())
    );
    return filtered.length === 0 ? ['No items match the filter.'] : filtered;
  }

  return (
    <>
      <SearchBar value={typed} onChange={(e) => setTyped(e.target.value)} />
      <SearchResults filtered={filter()} />
    </>
  );
}
