import React from 'react';

class CounterComponent extends React.Component{
    state = {
        count:0
    }
    
    render(){
        return (
            <div>
              <button onClick={this.increment}>+</button>
              <button onClick={this.decrement}>-</button>
              <button onClick={this.reset}>R</button>
              <span>{this.state.count}</span>
             </div>
        )
    }

    increment = () => {
      this.setState({
          count:this.state.count+1
      });
    }

    decrement = () => {
        this.setState({
            count:this.state.count-1
        });
    }

    reset = () => {
        this.setState({
            count:0
        });
    }
}

export default CounterComponent;