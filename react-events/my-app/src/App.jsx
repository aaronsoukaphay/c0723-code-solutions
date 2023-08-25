import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }

  return (
    <>
      <CustomButton
        text="Hello"
        color="green"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="I am"
        color="blue"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Awesome"
        color="red"
        onCustomClick={handleCustomClick}
      />
    </>
  );
}

export default App;
