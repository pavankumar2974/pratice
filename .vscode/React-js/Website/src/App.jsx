import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebComp from 'src/Components/webComp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WebComp />
    </>
  )
}

export default App
