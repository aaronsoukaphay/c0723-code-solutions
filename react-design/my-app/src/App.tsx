import './App.css';
import RotatingBanner from './RotatingBanner.jsx';

function App() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];

  return <RotatingBanner items={items} />;
}

export default App;
