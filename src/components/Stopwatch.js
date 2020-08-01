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
                  0
                </p>
                <div> 
                    <button>Reset</button>
                    <button>Start</button>
                    <button>Pause</button>
                </div>
            </div>
          )
        }
    }
    export default Stopwatch;
    
    
   