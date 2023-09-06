import { useState } from 'react';
import './App.css';
import AppDrawer from './AppDrawer.jsx';

const header = ['Menu'];
const tabs = ['About', 'Get Started', 'Sign In', 'Contact Us'];

function App() {
  const [item, setItem] = useState('No menu selected');

  return (
    <>
      <AppDrawer tabs={tabs} header={header} onSelect={(tab) => setItem(tab)} />
      <h1>{item}</h1>
    </>
  );
}

export default App;
