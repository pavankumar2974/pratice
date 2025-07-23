import { Component } from "react";

class Employee extends Component {
  // This way We declare objects and arrays in JS
  // var myName="Leela"
  // var person={}
  // var users=[]
  //   All the Above Declarations should be inside the state

  // type1 of creating astate
  // state={} state in reactjs

  // Type2 of Creating  State
  // constructor(){
  // this.state={}
  // }

  state = {
    message: "Welcome to Employee reactJs Class Component", //creating asimple string
  };
  //   constructor() {
  //     super();
  //     this.state = {};
  //   }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default Employee;
