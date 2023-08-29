import { useState } from 'react';
import './ToggleButton.css';

export default function ToggleButton({ label }) {
  const [isOn, setIsOn] = useState(true);

  let bgColor;
  let position;

  if (isOn) {
    label = 'ON';
    bgColor = 'green';
    position = 5;
  } else {
    label = 'OFF ';
    bgColor = 'red';
    position = -35;
  }

  return (
    <div className="row">
      <button
        onClick={() => setIsOn(!isOn)}
        style={{ backgroundColor: bgColor }}
        className="toggle-switch">
        <p className="slider" style={{ translate: position }}></p>
      </button>
      <p className="state-label">{label}</p>
    </div>
  );
}
