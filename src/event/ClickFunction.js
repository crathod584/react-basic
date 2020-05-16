import React from 'react';

function ClickFunctionComponent(){
   
    function clickMe(){
        console.log('button clicked')
    }

   return <div>

         <button onClick={clickMe}>Cklick me</button>
   </div>
}

export default ClickFunctionComponent;