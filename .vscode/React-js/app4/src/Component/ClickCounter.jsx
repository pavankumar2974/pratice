import { Component } from "react";
import HocComponent from "./HocComponent";

class ClickCounter extends Component {
    render() {
        console.log(this.props);
        console.log("From ClickCounter");


        const { count, incrementCount, decrementCount, resetCount } = this.props;

        return (
            <div>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
                <h2>Count: {count}</h2>
            </div>
        );
    }
}

export default HocComponent(ClickCounter);
