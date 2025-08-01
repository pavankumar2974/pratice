import { Component } from "react";

class Comp extends Component {
    constructor() {
        super();
        this.state = {
            Car: [
                "INNOVA",
                "ERTIGA",
                "SCARPIO",
                "NANO",
                "BMW",
                "AUDI",

            ],
        };
    }
    

    render() {
        return (
            <div>
                <ul>
                    {Object.values(this.state.Car).map((val, i) => {
                        return <li key={i}>{val}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
export default Comp;