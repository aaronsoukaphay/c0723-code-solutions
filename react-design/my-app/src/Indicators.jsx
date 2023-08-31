export default function Indicators({ count, current, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        onClick={() => onSelect(i)}
        style={{ backgroundColor: current === i ? 'lightblue' : undefined }}
        key={i}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
