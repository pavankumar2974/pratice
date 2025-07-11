import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentOneClass from './COMPONENTS/ComponentOneClass'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentOneClass />
    </>
  )
}

export default App
