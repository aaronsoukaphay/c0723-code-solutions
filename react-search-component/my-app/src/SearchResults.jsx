export default function SearchResults({ filtered }) {
  const statements = filtered.map((statement, index) => (
    <li key={index}>{statement}</li>
  ));
  return <ul>{statements}</ul>;
}
