import { Component } from "react";

class Car extends Component{
    constructor(){
        super();
        this.state={
            Car:[
                "INNOVA",
                "ERTIGA",
                "FORTUNER",
                "AUDIQ7",
                "JAGUAR",
                "BUGATTI",
                "FERRARI",
                "FORD MUISTANG",
                "LAMBORGINI",
                "LEXUS",
            ],
                
            };
        }

        render(){
            return(
                <div>
                  <ul>
                    {object.values(this.state.Car).map((val, i)=>{
                        return<li key={i}>{val}</li>;
                    })}</ul>  
                </div>
            )
        }
    }
    export default Car;
