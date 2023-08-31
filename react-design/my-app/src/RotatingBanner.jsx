import Banner from './Banner.jsx';
import NextButton from './NexButton.jsx';
import PrevButton from './PrevButton.jsx';
import Indicators from './Indicators.jsx';

export default function RotatingBanner({ items }) {
  return (
    <>
      <Banner items={items} />
      <PrevButton />
      <Indicators />
      <NextButton />
    </>
  );
}
