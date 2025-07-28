import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App2, { ComponetPavan, PavanComponent } from './Components/appComp'
import KumarCompo from './Components/kumarCompo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <App2/>
<PavanComponent/>
<ComponetPavan/>
<KumarCompo/>
      
    </div>
  )
}

export default App;
