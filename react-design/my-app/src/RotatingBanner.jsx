import Banner from './Banner.jsx';
import NextButton from './NexButton.jsx';
import PrevButton from './PrevButton.jsx';
import Indicators from './Indicators.jsx';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  setCurrentIndex();
  return (
    <>
      <Banner item={items[currentIndex]} />
      <PrevButton />
      <Indicators count={items.length} currentIndex={currentIndex} />
      <NextButton />
    </>
  );
}
