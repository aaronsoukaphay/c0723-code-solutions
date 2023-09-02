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
        <div className="slider" style={{ translate: position }}></div>
      </button>
      <span className="state-label">{label}</span>
    </div>
  );
}
