import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassTwoComp from './COMPONENTS/ClassTwoComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <ClassTwoComp/>
    </div>
  )
}

export default App
