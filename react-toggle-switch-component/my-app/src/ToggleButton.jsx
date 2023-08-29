import { useState } from 'react';

export default function ToggleButton({ label }) {
  const [isOn, setIsOn] = useState(true);

  let bgColor;
  let position;

  if (isOn) {
    label = 'ON';
    bgColor = 'green';
    position = 1;
  } else {
    label = 'OFF ';
    bgColor = 'red';
    position = -31;
  }

  return (
    <>
      <button
        onClick={() => setIsOn(!isOn)}
        style={{ backgroundColor: bgColor }}
        className="toggle-switch">
        <button className="slider" style={{ translate: position }}></button>
      </button>
      <p className="state-label">{label}</p>
    </>
  );
}
