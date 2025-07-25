import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppComp from './components/appComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
<AppComp/>
    </div>  
    </>
  )
}

export default App
