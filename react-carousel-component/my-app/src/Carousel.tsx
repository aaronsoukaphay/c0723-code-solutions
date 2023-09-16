import { useState, useEffect, useCallback } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';
import './Carousel.css';

type CarouselProps = {
  pokemon: string[];
};

export default function Carousel({ pokemon }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const handleNext = useCallback(
    () => setIndex((index + 1) % pokemon.length),
    [index, pokemon]
  );
  useEffect(() => {
    const timerId = setTimeout(handleNext, 3000);
    return () => clearTimeout(timerId);
  }, [handleNext]);

  return (
    <div>
      <PrevButton
        onClick={() => setIndex((index - 1 + pokemon.length) % pokemon.length)}
      />
      <Banner src={pokemon[index]} />
      <NextButton onClick={() => setIndex((index + 1) % pokemon.length)} />
      <Indicators
        pokemon={pokemon}
        index={index}
        onClick={(i: number) => setIndex(i)}
      />
    </div>
  );
}

type BannerProps = {
  src: string;
};

function Banner({ src }: BannerProps) {
  return <img className="carousel" src={src} />;
}

type Button = {
  onClick: CallableFunction;
};

function PrevButton({ onClick }: Button) {
  return (
    <FaChevronLeft onClick={onClick} size={30} className="previous-image" />
  );
}

function NextButton({ onClick }: Button) {
  return <FaChevronRight onClick={onClick} size={30} className="next-image" />;
}

type Indicators = {
  pokemon: string[];
  index: number;
  onClick: CallableFunction;
};

function Indicators({ pokemon, index, onClick }: Indicators) {
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
