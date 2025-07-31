import { Component } from "react";

export default class ChildComp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h2>Welcome Child Component</h2>
                <h3>{this.props.newMessage}</h3>
            </div>
        );
    }
}
