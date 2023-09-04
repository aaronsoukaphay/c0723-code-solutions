import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Banner item={items[index]} />
      <PrevButton
        onClick={() => setIndex((index - 1 + items.length) % items.length)}
      />
      <Indicators
        items={items}
        currentIndex={index}
        onClick={(index) => setIndex(index)}
      />
      <NextButton onClick={() => setIndex((index + 1) % items.length)} />
    </div>
  );
}

function Banner({ item }) {
  return <div>{item}</div>;
}

function PrevButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Previous</button>
    </div>
  );
}

function Indicators({ items, onClick, currentIndex }) {
  return (
    <>
      {items.map((item, i) => (
        <button
          style={{
            backgroundColor: currentIndex === i ? 'lightblue' : undefined,
          }}
          onClick={() => onClick(i)}
          key={i}>
          {i}
        </button>
      ))}
    </>
  );
}

function NextButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Next</button>
    </div>
  );
}
