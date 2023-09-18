import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';
import './Carousel.css';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';

type PokemonProp = {
  pokemon: string[];
};

export default function Carousel({ pokemon }: PokemonProp) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(
    () => setCurrentIndex((currentIndex + 1) % pokemon.length),
    [currentIndex, pokemon]
  );

  useEffect(() => {
    const timerId = setTimeout(handleNext, 3000);
    return () => clearTimeout(timerId);
  }, [handleNext]);

  function handlePrev() {
    setCurrentIndex((currentIndex - 1 + pokemon.length) % pokemon.length);
  }

  return (
    <div className="carousel">
      <PrevButton onClick={handlePrev} />
      <Image pokemon={pokemon[currentIndex]} />
      <NextButton onClick={handleNext} />
      <Dots
        index={currentIndex}
        pokemon={pokemon}
        onClick={(i: number) => setCurrentIndex(i)}
      />
    </div>
  );
}

type ButtonProp = {
  onClick: CallableFunction;
};

function PrevButton({ onClick }: ButtonProp) {
  return <FaChevronLeft onClick={onClick} className="previous-image" />;
}

function NextButton({ onClick }: ButtonProp) {
  return <FaChevronRight onClick={onClick} className="next-image" />;
}

type Image = {
  pokemon: string;
};

function Image({ pokemon }: Image) {
  return (
    <div className="image-wrapper">
      <img src={pokemon} className="current-image" />
    </div>
  );
}

type DotsProp = {
  pokemon: string[];
  index: number;
  onClick: CallableFunction;
};

function Dots({ pokemon, index, onClick }: DotsProp) {
  return (
    <div className="progress-dots">
      {pokemon.map((item, i: number) =>
        i === index ? (
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
        )
      )}
    </div>
  );
}
