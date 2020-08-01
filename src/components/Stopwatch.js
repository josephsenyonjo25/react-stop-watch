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
      this.setState({counter:0, started:false});
      clearInterval(this.timer);  
    }

    handleStart() {
       if(!this.state.started) {
           this.timer = setInterval(()=>{
               this.setState({counter:this.state.counter+1, started:true});
           }, 1000);
       }
    }

    handlePause() {
        if(this.state.started){
            this.setState({started:false});
            clearInterval(this.timer);
        }
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
    
    
   