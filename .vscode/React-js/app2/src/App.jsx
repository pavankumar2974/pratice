import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App2, { ComponetPavan, PavanComponent } from './Components/appComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <App2/>
<PavanComponent/>
<ComponetPavan/>
      
    </div>
  )
}

export default App;
