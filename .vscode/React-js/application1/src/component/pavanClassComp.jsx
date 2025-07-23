import React, { Component } from "react";

class PavanClassComp extends Component {
  constructor() {
    super();
    this.state = {
      messsage: "Welcome to ReactJS State",
    };
  }

  render() {
    return (
      <div>
        <h3>Welcome to PavanClass Component</h3>
        <h2>{this.state.messsage}</h2>
      </div>
    );
  }
}

export default PavanClassComp;
