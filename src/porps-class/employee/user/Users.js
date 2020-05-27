import React from 'react';
import User from './User';

class Users extends React.Component {
   render(){
     return (<div>
              {/* 
                 parent to child communication
                
                 <User age="40" greetParent>chertgrtan</User>
                <User age="50">chetrgrtan</User>
                <User >chedfggtan</User> 
              */}

              {/* child to parent communication */}
              <User greetParent={this.greetParent}/>
            </div>
     )  
   }
   
  //  greetParent = () =>{
  //   alert(`Hello`)
  // }

  greetParent = (value) =>{
    alert(`Hello from ${value}`)
  }
}

export default Users;