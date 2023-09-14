import { useState, useEffect } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';
import './Carousel.css';

export default function Carousel({ pokemon }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIndex((index + 1) % pokemon.length);
      console.log(`index: ${index}`);
    }, 3000);
    return () => clearTimeout(timerId);
  });

  return (
    <div>
      <PrevButton
        onClick={() => setIndex((index - 1 + pokemon.length) % pokemon.length)}
      />
      <Banner src={pokemon[index]} className="carousel" />
      <NextButton onClick={() => setIndex((index + 1) % pokemon.length)} />
      <Indicators
        pokemon={pokemon}
        index={index}
        onClick={(i) => setIndex(i)}
      />
    </div>
  );
}

function Banner({ src }) {
  return <img src={src} />;
}

function PrevButton({ onClick }) {
  return (
    <FaChevronLeft onClick={onClick} size={30} className="previous-image" />
  );
}

function NextButton({ onClick }) {
  return <FaChevronRight onClick={onClick} size={30} className="next-image" />;
}

function Indicators({ pokemon, index, onClick }) {
  return (
    <div className="progress-dots">
      {pokemon.map((item, i) => {
        return index === i ? (
          <FaCircle
            key={i}
            onClick={() => onClick(i)}
            className="progress-dot"
          />
        ) : (
          <FaRegCircle
            key={i}
            onClick={() => onClick(i)}
            className="progress-dot"
          />
        );
      })}
    </div>
  );
}
