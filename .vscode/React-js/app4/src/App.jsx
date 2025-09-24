import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './Component/ClickCounter'
import HoverCounter from './Component/HoverCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ClickCounter />
        <hr />
        <HoverCounter />
      </div>
    </>
  )
}

export default App
