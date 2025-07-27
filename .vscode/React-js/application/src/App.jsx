import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppComp from './components/appComp'
import Comp from './components/Comp'
import Compo from './components/Compo'
import ClassCar from './components/ClassCar'
import ClassBike from './components/ClassBike'
import SampleClass, { Cars, Example } from './components/SampleClass'
import Bike from './components/SampleClass'



function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      {/* <AppComp/>
<Comp/>
<Compo/>
<ClassCar/> */}
      <ClassBike />
      <SampleClass />
      <Bike />
      <Cars />
      <Example />
    </div>
    </>
  )
}

export default App
