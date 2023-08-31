import Banner from './Banner.jsx';
import NextButton from './NexButton.jsx';
import PrevButton from './PrevButton.jsx';
import Indicators from './Indicators.jsx';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(5);

  return (
    <>
      <Banner item={items[currentIndex]} />
      <PrevButton
        onSelect={() =>
          setCurrentIndex((currentIndex - 1 + items.length) % items.length)
        }
      />
      <Indicators
        count={items.length}
        current={currentIndex}
        onSelect={(i) => setCurrentIndex(i)}
      />
      <NextButton
        onSelect={() => setCurrentIndex((currentIndex + 1) % items.length)}
      />
    </>
  );
}
