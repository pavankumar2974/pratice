import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassOneComp  from './assets/components/ClassOneCom.jsx'
function game1() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ClassOneComp/>
    </>
  )
}

export default game1;
