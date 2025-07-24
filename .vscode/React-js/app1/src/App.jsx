import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassBaseComp from "./COMPONENTS/ClassBaseComp";
import Employee from "./COMPONENTS/Employee";
import { KumarClassComp, LeelaClassComp, PavanComp, VMRClassComp } from "./COMPONENTS/PavanComp";
import User from "./COMPONENTS/User";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
         <ClassBaseComp />
        
         <LeelaClassComp />
        <KumarClassComp />
        <VMRClassComp /> 
        <Employee />
        <PavanComp/>
        <LeelaClassComp/>
        <KumarClassComp/>
         <VMRClassComp/> 
        <User/>
       </div> 
    </>
  );
}

export default App;
