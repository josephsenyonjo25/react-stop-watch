import React, {Component} from 'react';


class Stopwatch extends Component {
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
    
    
   