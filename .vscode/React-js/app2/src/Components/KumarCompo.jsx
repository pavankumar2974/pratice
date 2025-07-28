import { Component } from "react";



class KumarCompo extends Component{
    state={
        message:"Welcome to kumar class "
    }
        
    
    render(){
        return <div>
            <h1>{this.state.message}</h1>
        </div>
    }
}
export default KumarCompo;