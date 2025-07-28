import { Component } from "react";

class App2 extends Component{
    render(){
        return<div>
            <h1>Welcome to app2 Component</h1>
        </div>
    }
}

export default App2;

export class PavanComponent extends Component{
    render(){
        return<div>
            <h2>Welcome to PavanComponent</h2>
        </div>
    }
}

export class ComponetPavan extends Component{
    constructor(){
        super();
        this.state ={message:"Welcome to Component pavan "}
    }

    render(){
        return<div>
            <h2>{this.state.message}</h2>
        </div>
    }
}
