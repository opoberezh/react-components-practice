
import { Component} from "react";
import { A } from "./A";

const styles = {
    background: 'orangered',
    padding: 12,

}

// export class StateExample extends Component {
// state = {
//     numderOfClicks: 0
// };


// (ми оголошуємо у state деномічні дінні і ми їх використовуємо у шаблоні, це перезапише данні у шаблоні)
// if we need to renovate the state

// handleClick = () => {
// this.setState({
//     numderOfClicks: 10
// })
// }


// (якщо нам потрібно оновити данні від попереднього ми завжди передаємо функцію. Що ця ф-я отримує - вона отримає попередній стан або актуальний стан. І ця функція має повернути цей обєкт оновлення)
// if we need to renovate data of preview. This function is always inline
// handleClick = () => {
//     this.setState(prevState => {
// return{
//     numberOfClicks: prevState.numberOfClicks +1
// }
//     })
// }

// handleReset = () =>{
//     this.setState( {
//         numberOfClicks: 0
//     })
// }

//     render(){
        
//           return (
// <div style={styles}>
//     StateExample
  
// <A/>
// </div>
//     );
//     }


// Резюме: оголосили шаблон, оголосили динамічні данні та методи для роботи з динамічними данними, привязали ці методи до нашої розмітки


// переносимо всі динамічні дані до обєкту А, тепер там зберігається динамічний стан numderOfClicks Що це означає, стан небхідно зберігати за місцем його використання або необхідності.
// export const StateExample = () => {
//     return (
// <div style={styles}>
//     <StateExample/>
//    <A/>
// </div>
//     );
// };




// А якщо нам потрібно змінювати данні і в  StateExample, і в А,(фба зявляється обєкт В, і динамічний стан потрібен і в StateExample, і в А,і в В) тоді ми знову піймаємо (повертаємо) numderOfClicks до StateExample,(фбо шукаємо найближчого спільного предка) а до А (і В) будемо передавати данні пропсами

export class StateExample extends Component {
    state = {
        numderOfClicks: 0
    };
    
    handleClick = () => {
            this.setState(prevState => {
        return{
            numberOfClicks: prevState.numberOfClicks +1
        }
            })
        }
        
        handleReset = () =>{
            this.setState( {
                numberOfClicks: 0
            })
        }
        
        render() {
            return (
              <div style={styles}>
                StateExample
                <button onClick={this.handleClick}>{this.state.numberOfClicks}</button>
                <button onClick={this.handleReset}>Reset</button>
            <A clicks={this.state.numderOfClicks} onIncrement={this.handleClick}
             onReset={this.handleReset}
            /> 
            {/* peace off state from state of StateExample  */}

        </div>
           
        
            );
        }
}

// state можна передавати  донизу компонентам дітям