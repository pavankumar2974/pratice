import { Component } from "react";
import ChildComp from "./childComp";



export default class ParentComp extends Component {
    constructor() {
        super();
        this.state = {
            message: "parent Component text is called from childComponent"
        };
    }

    changeMsgInParent = () => {
        this.setState({
            message: "Text is changed when you click the button"
        });
    }
    render() {
        return (
            <div>
                <h2>parent component</h2>
                <button onClick={this.changeMsgInParent}>Change</button>


                <ChildComp newMessage={this.state.message} />
            </div>
        );
    }

}