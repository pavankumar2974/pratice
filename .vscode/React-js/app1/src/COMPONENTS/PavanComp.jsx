import { Component } from "react";

export class PavanComp extends Component{
  render(){
    return <div>
      <h2>Welcome to pavan Comp</h2>
    </div>
  }
}

export class LeelaClassComp extends Component {
  render() {
    return (
      <div>
        <h2>Iam From LeelaClass Component</h2>
      </div>
    );
  }
}

export class KumarClassComp extends Component {
  render() {
    return (
      <div>
        <h2>Iam From KumarClass Component</h2>
      </div>
    );
  }
}

export class VMRClassComp extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to VMRClass Component",
    };
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}
