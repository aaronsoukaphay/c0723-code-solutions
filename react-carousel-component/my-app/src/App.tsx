import './App.css';
import Carousel from './Carousel.jsx';

const pokemon = [
  '/images/bulbasaur.png',
  '/images/caterpie.png',
  '/images/charmander.png',
  '/images/squirtle.png',
  '/images/weedle.png',
];

function App() {
  return (
    <>
      <Carousel pokemon={pokemon} />
    </>
  );
}

export default App;
