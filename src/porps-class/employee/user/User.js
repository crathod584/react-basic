import React from 'react';
// ------ User funtion component using porps (do not have state and can not use this keyword)

const User = (props) =>{
    // let age = props.age?props.age:"NA";

    return (
            <div>
                {/* Name:{props.children} || Age:{age} */}
                

                {/* Calling parent method from child 

                   <button onClick={props.greetParent}>Call Parent Method</button>  
                */}

                 
                 {/* this call directly function, to we have to use arrow function aproch
                    
                 <button onClick={props.greetParent('child')}>Call Parent Method</button>   */}

                      <button onClick={() => props.greetParent('child')}>Call Parent Method</button>
            </div>
           )
}

export default User;