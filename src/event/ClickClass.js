import React from 'react';

class ClickCassComponent extends React.Component {
    
    // constructor(){
    //     super();
    //     // 4. this.clickMe = this.clickMe.bind(this);
    // }
    

    // Only need to find event if we are using "this" keyword inside a function 

    render(){
        return <div>
            {/*1. this give undefined beacause it takes function scope so we need to bind the event handle  
                 <button onClick={this.clickMe} >Click me class</button> 
           */}

            {/* 2.bind method in render funtion , bind click event but it's not good pratice because it will bind event again and again whenever react re-render the UI
             <button onClick={this.clickMe.bind(this)} >Click me class</button> 
            */}

            {/*  3.use arrow function in render function method to bind click event but it's not good pratice because it will bind event again and again whenever react re-render the UI 

            use this approch when you want to pass pram in function
            <button onClick={() => this.clickMe()} >Click me class</button> 
            */}

             {/* 4 .bind method in constructor function , bind click event, it's good pratice because it will bind event once, because it is used in controcter function
                 <button onClick={this.clickMe} >Click me class</button>  
             */}

              {/* 5. use arrow function insted of noral function it will take parent scope */}
              <button onClick={this.clickMe} >Click me class</button>     
        </div>
    }


    // clickMe(){
    //   // 1. console.log(this) 
    //   // 2. console.log(this)
    //   // 3. console.log(this)
    // //   4. console.log(this)
    // }
    
    // 5
    clickMe = () =>{
        console.log(this)
    }
}

export default ClickCassComponent;