import { Component} from "react";
class User extends Component {
    constructor(){
        super();
        this.state ={
            message:"welcome to User Component",

            bike:{
                bName:"FZ-X",
                price:"180000",
                milage:"45km",
                Model:"2022",
            },

            bikes:[
                "Tvs",
                "Bajaj",
                "Suzuki",
                "Hero",
                "Honda",
                "KTM",
                "Rajdooth",
                "Yezdi",
            ],
        };
    }

    render(){
        return(
            <div>
                <h2>Welcome to React-js components</h2>
                <br/>
                <h3>{this.state.message}</h3>

                <ul>
                    <li>{this.state.bike.bName}</li>
                    <li>{this.state.bike.Model}</li>
                    <li>{this.state.bike.milage}</li>
                    <li>{this.state.bike.price}</li>
                </ul>
                <ul>
                    {Object.values(this.state.bikes).map((val, i)=>{
                        return <li key={i}>{val}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
 export default User;