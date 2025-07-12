import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import StudentComp from './assets/components/StudentComp.jsx'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StudentComp />
    </>
  );
}

export default App;
