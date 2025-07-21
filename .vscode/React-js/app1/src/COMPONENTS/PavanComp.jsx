import { Component } from "react";

export class PavanComp extends Component {
    render(){
        return (
            <div>
<h2>Welcome to PavanComp.jsx</h2>
            </div>
        );
    }
}

export class KumarComp extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to kumarComp.jsx</h1>
            </div>
        );
    }
}

export class VmrComp extends Component{
  constructor(){
    super();
    this.state ={
      message:"Welcome to VmrComp.jsx",
    };
  }
  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}