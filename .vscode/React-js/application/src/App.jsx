import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppComp from './components/appComp'
import Comp from './components/Comp'
import Compo from './components/Compo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
<AppComp/>
<Comp/>
<Compo/>
    </div>  
    </>
  )
}

export default App
