import React, {Component} from 'react';


class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.display = null;
  
        this.state= {
          counter: 0,
          started: false
        };
        
        this.handleReset = this.handleReset.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
      }

    handleReset() {
        
    }

    handleStart() {
        
    }

    handlePause() {
        
    }

        render() {
          
          return (
            <div className= "Stopwatch">
                
                <p id = "clock">
                  {this.state.counter}
                </p>
                <div> 
                    <button onClick = {this.handleReset}>Reset</button>
                    <button onClick = {this.handleStart}>Start</button>
                    <button onClick = {this.handlePause}>Pause</button>
                </div>
            </div>
          )
        }
    }
    export default Stopwatch;
    
    
   