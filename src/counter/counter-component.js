import React from 'react';

class CounterComponent extends React.Component{
    state = {
        count:0
    }

    increment(){
    
        //this will not render on UI but value will update on console beacause rect will not know that, has to update UI if we directly upda the state so use seState(),
            // this.state.count = this.state.count+1;
            // console.log(this.state.count);
         
        // not update for multiple in one click
            // this.setState(
            //     {count:this.state.count+1
            // });
  
            //  setState is a async funtion  
            this.setState(
                    {count:this.state.count+1
                },() =>{
                    console.log('call back value call after vvalue update', this.state.count)
                });    

        // update for multiple in one click and setsate secound param is props
        // this.setState((prevState,props) => ({
        //     count: prevState.count+1 
        //     count1: prevState.count+props.value 

        // }));

            console.log(this.state.count);

      }
  
      increment5(){

        // if use multiple method with "this.setState({count:this.state.count+1});" it will only incremnt with +1 beacause reacte will run all set state in one to better performance , so use this.setState((prevState) => ({count: prevState.count+1}));
          this.increment();
          this.increment();
          this.increment();
          this.increment();
          this.increment();
  
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
    
    render(){
        return (
            <div>
              {/* <button onClick={this.increment}>+</button> */}
              <button onClick={() => this.increment5()}>+5</button>

              <button onClick={this.decrement}>-</button>
              <button onClick={this.reset}>R</button>
              <span>{this.state.count}</span>
             </div>
        )
    }

    
}

export default CounterComponent;