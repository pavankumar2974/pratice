import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBaseComp from './COMPONENTS/ClassBaseComp'
import ClassOneComp from './COMPONENTS/ClassOneComp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClassBaseComp />
      <ClassOneComp />
    </>
  )
}

export default App;
