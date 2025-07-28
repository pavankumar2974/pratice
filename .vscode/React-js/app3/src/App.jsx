import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppClassComp from './component/appClassComp'

function App() {
  const [count, setCount] = useState(0)

  return (<div>
    <AppClassComp/>
    </div>
  )
}

export default App
