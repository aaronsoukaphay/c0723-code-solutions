import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text, color) {
    alert(`This button is ${text} and it is ${color}`);
  }

  function handleNewClick(text, color) {
    alert(`I am a new message for ${text} ${color} button`);
  }

  function handleThird(text, color) {
    alert(`I am the third message ${text} ${color}`);
  }
  return (
    <>
      <CustomButton text="Btn1" color="red" onCustomClick={handleCustomClick} />
      <CustomButton text="Btn2" color="green" onCustomClick={handleNewClick} />
      <CustomButton text="Btn3" color="blue" onCustomClick={handleThird} />
    </>
  );
}

export default App;
