import './CustomButton.css';

export default function CustomButton({ text, color, onCustomClick }) {
  return (
    <button className={color} onClick={() => onCustomClick(text, color)}>
      {text}
    </button>
  );
}
