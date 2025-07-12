import { Component } from "react";
class StudentComp extends Component{
    render(){
        return(
            <div>
         
          <h1>Student Details</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John snow</td>
                    <td>20</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>Pavan</td>
                    <td>20</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>Dinesh</td>
                    <td>21</td>
                    <td>A</td>
                </tr>

            </tbody>
        </table>
            </div>
        )
    }
}
export default StudentComp;