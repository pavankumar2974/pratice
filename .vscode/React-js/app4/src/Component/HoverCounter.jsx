import { Component } from "react";
import HocComponent from "./HocComponent";



class HoverCounter extends Component {
    render() {
        console.log(this.props);
        console.log("HoverCounter");
        const { count, incrementCount, decrementCount, resetCount } = this.props;
        return (
            <div>
                <button onMouseOver={incrementCount}>Increment</button>
                <button onMouseOver={decrementCount}>Decrement</button>
                <button onMouseOver={resetCount}>Reset</button>
                <h2>Count:{count}</h2>
            </div>
        )
    }
}
export default HocComponent(HoverCounter);