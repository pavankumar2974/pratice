import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import studentComp from './src/components/studentComp.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <studentComp />
    </>
  )
}

export default App;
