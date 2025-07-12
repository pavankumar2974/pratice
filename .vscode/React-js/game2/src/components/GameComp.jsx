import { Component } from "react";
class GameComp extends Component{
    render(){
        return(
            <div>
          <h1>Game  character</h1>      
          <ul>
            <li>Character 1:- Deva from Salaar</li>
            <li>Character 2:-Mahendra Bhaubali from Bhaubali</li>
            <li>Character 3:- Bhairava from Kaliki</li>
            <li>Character 4:- Praba from darling</li>
          </ul>
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
export default GameComp;