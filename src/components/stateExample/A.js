// import { Component } from "react";

import { B } from "./B";

const styles = {
    backgroundColor: 'green',
    padding: 12,
  };



//   export class A extends Component  {
//     state = {
//         numderOfClicks: 0
//     };

//     handleClick = () => {
//     this.setState(prevState => {
// return{
//     numberOfClicks: prevState.numberOfClicks +1
// };
//     });
// };

// handleReset = () =>{
//     this.setState( {
//         numberOfClicks: 0
//     });
// };

//    render(){
//     return (
//    <div srule={styles}>  <button onClick = {this. handleClick}>{this.state.numderOfClicks}</button>
//     <button onClick={this.handleReset}>Reset</button></div>
//     );

//    }
// }


// Деструктиризуємо прос clicks зі StateExample
// props onReset for component A is transit
  export const A = ({clicks,onIncrement, onReset }) => {
    return(
        <div style={styles}> Click: {clicks}
        <button onClick={onIncrement}>Increment</button>
        <B velue={clicks} onReset={onReset}/>
        </div>
    )
  }