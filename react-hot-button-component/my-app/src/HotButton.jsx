import { useState } from 'react';

export default function HotButton() {
  const [clicks, setClicks] = useState(0);

  function handleClicks() {
    setClicks(clicks + 1);
  }

  let bgColor;

  if (clicks < 3) {
    bgColor = '#1a1a1a';
  } else if (clicks < 6) {
    bgColor = 'rgb(53,28,117)';
  } else if (clicks < 9) {
    bgColor = 'rgb(103,78,167)';
  } else if (clicks < 12) {
    bgColor = 'salmon';
  } else if (clicks < 15) {
    bgColor = 'orange';
  } else if (clicks < 18) {
    bgColor = 'yellow';
  } else {
    bgColor = 'white';
  }

  return (
    <button
      onClick={handleClicks}
      className="button"
      style={{ backgroundColor: bgColor, color: 'black' }}>
      Hot Button {clicks}
    </button>
  );
}
