import { Component } from "react";


function HocComponent(Middlecomp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            };
        }
        incrementCount = () => {
            this.setState({ count: this.state.count + 1 });
        };
        decrementCount = () => {
            this.setState({ count: this.state.count - 1 });
        };
        resetCount = () => {
            this.setState({ count: 0 });
        };
        render() {
            return (
                <div>
                    <Middlecomp
                        incrementCount={this.incrementCount}
                        decrementCount={this.decrementCount}
                        resetCount={this.resetCount}
                        {...this.state} />
                </div>
            )
        }
    }
}
export default HocComponent;