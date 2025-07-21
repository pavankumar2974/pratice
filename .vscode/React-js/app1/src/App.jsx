import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBaseComp from './COMPONENTS/ClassBaseComp'
import ClassOneComp from './COMPONENTS/ClassOneComp'
import { pavanComp,kumarComp,vmrComp } from './COMPONENTS/PavanComp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <pavanComp />
      <kumarComp />
      <vmrComp />
      {/* <ClassBaseComp />
      <ClassOneComp /> */}
    </>
  )
}

export default App;
