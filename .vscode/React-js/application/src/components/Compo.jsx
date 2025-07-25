import { Component } from "react";

class Compo extends Component{
    constructor(){
        super();
        this.state ={
            lang:[
                "c",
                "c++",
                "Java",
                "Python",
                "R",
            ],
            message:"Welcome to Compo.jsx",

            languages:{
                Pro:"c,c++,python",
                dataBase:"SQL,MangoDB",
                Testing:"Selunium",
                cloud:"Devops,Azure",
            }

        };
    }
render(){
    return(
        <div>
            <ul>
                {Object.values(this.state.lang).map((val,i)=>{
                    return<li key={i}>{val}</li>
                })}
                
            </ul>
            <h2>{this.state.message}</h2>
            <ul>
                <li>{this.state.languages.Pro}</li>
                <li>{this.state.languages.Testing}</li>
                <li>{this.state.languages.cloud}</li>
                <li>{this.state.languages.dataBase}</li>
            </ul>
        </div>
    );
}
    
}
export default Compo;