import { Component } from "react";




class ClassOneComp extends Component{
    render(){
        return(
            <div>
                <h2>Components</h2>
                <h2>Welcome to Class1 component</h2>
                <p>This is a simple class component in React. React is a JavaScript library for building user interfaces.</p>
                <p>Class components are ES6 classes that extend from React.Component and must contain a render method.</p>
                <p>They can hold and manage their own state, and can also receive props from their parent components.</p>
                <p>Class components are useful for creating complex components that require lifecycle methods or state management</p>
            </div>
        )
    }
}
export default ClassOneComp;