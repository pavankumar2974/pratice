import React, { Component } from "react";
class ClassOneComp extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome to ReactJs State",
        };
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

export default ClassOneComp;