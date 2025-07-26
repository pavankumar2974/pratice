import { Component } from "react";

class AppComp extends Component {
    constructor() {
        super();
        this.state = {
            Bikes: [
                "TVS",
                "Bajaj",
                "Suzuki",
                "Hero",
                "Honda",
                "KTM",
                "RajDooth",
                "Yezdi",
            ],
        };
    }
    render() {
        return (
            <div>
                <ul>
                    {Object.values(this.state.Bikes).map((val, i) => {
                        return <li key={i}>{val}</li>;
                    })
                    }
                </ul>
            </div>
        );
    }
}
export default AppComp;