// import { Component } from "react";
// class AppClassComp extends Component{
//     render(){
// return<div>
//     <div id="head">
//         <h1>Movie Collection</h1>

import { Component } from "react";

// import { Component } from "react";

//         <nav>
//             <ul>
//                 <li>Home</li>
//                 <li>Movie</li>
//                 <li>Telugu</li>
//                 <li>Tamil</li>
//                 <li>Hindi</li>
//             </ul>
//         </nav>
//     </div>
// </div>
//     }
// }
// export default AppClassComp;



//    export  class AppClassComp extends Component{
//    state={
//     message:"Welcome to AppClassComponent"
//    } 
//    render(){
//     return(<div>
//         <h1>{this.state.message}</h1>
//     </div>

//     )
//    }
//  };
// export default AppClassComp;

// import { Component } from "react";
//     class AppClassComp extends Component{
//     state={
//         bike:{ 
//             bprice:"200000",
//             bmilage:"45",
//             bspeed:"180",

//         }
//     }

//     render(){
//         return(<div>
//             <ul>
//              <li>{this.state.bike.bmilage}</li>
//              <li>{this.state.bike.bprice}</li>
//              <li>{this.state.bike.bspeed}</li>   
//             </ul>
//         </div>

//         )
//     }
// }

// export default AppClassComp;


class AppClassComp extends Component{
    constructor(){
        super();
        this.state={
            Bike:[
                "FZ-X","Crux","RX-100","Kawasaki Ninja H2R",
"Ducati Superleggera V4", 
"Ducati Panigale V4 R",
"BMW M 1000 RR",
"Kawasaki Ninja H2",
"Suzuki GSX-R1000R",
"Honda CBR1000RR-R SP",
"Aprilia RSV4 Factory"
            ]
        }
    }
    render (){
        return(<div>
            <ul>{Object.values(this.state.Bike).map((val,i)=>{return<li key={i}>{val}</li>})}</ul>
        </div>)
    }

}
export  default AppClassComp;