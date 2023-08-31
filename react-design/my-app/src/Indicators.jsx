export default function Indicators({ count, currentIndex }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<button key={i}>{i}</button>);
  }
  currentIndex;
  return <div>{buttons}</div>;
}
