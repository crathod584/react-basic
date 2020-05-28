import React, { Component } from 'react';

class ConditionalRendring extends Component {
    state = {
        loggedIn:false
    }

   render(){
    // 3rd and 4th aprroch is prefrable due to readability and code buety
    

    // 4. shor circuit oprater
    return this.state.loggedIn && <div>User is logged In</div>

    // 3. ternory oprater
    // return this.state.loggedIn ? 
    // <div>User is logged In</div>:
    // <div>User is Not logged In</div>
  
    // 2.
    //    let element;
    //     if(this.state.loggedIn){
    //       element = <div>User is logged In</div>;
    //     }else{
    //         element = <div>User is NOt logged In</div>;
    //     }
       
    //     return element;
        
    
    // 1.
        // if(this.state.loggedIn){
        //   return (<div>User is logged In</div>);
        // }else{
        //     return (<div>User is Not logged In</div>);
        // }
   }
}

export default ConditionalRendring;