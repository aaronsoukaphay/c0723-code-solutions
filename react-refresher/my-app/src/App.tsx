import './App.css';
import { useState } from 'react';
import CustomButton from './CustomButton.jsx';

function App() {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div className="row">
      <CustomButton text="Down" onCustomClick={handleDecrement} />
      <p className="number">{count}</p>
      <CustomButton text="Up" onCustomClick={handleIncrement} />
    </div>
  );
}

export default App;
