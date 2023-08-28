export default function CustomButton({ text, onCustomClick }) {
  return <button onClick={() => onCustomClick()}>{text}</button>;
}
