import React, { Component, Fragment } from 'react';

class Fragments extends Component {
    render(){
        // 1. we can't do statement "1" because render method can only return a sigle elemnt at a time. so we have add a parent which is "DIV" tag like in step "2", but with step "2" DOM creating a unnecessary "DIV" tag to OMIT this we can use "Fragment" tag which does not crate any node in DOM
        //  we can write in three ways "3" and "4"(by destructuring the object) and "5" but in step "5" we can't and anny othre param like className and propsand also "key" prop in case of LIST like step "6"

        
        // 1.
        // return <h1>fdgdg</h1>
        // <h2>fdgdg</h2>
        
        // 2.
        // <div>
        //  <h1>fdgdg</h1>
        // <h2>fdgdg</h2>
        // </div>
         
        // 3.
        // return <React.Fragment>
        //     <h1>fdgdg</h1>
        //    <h2>fdgdg</h2>
        // </React.Fragment>
        
        // 4.
        return <Fragment>
             <h1>fdgdg</h1>
            <h2>fdgdg</h2>
         </Fragment>
        
        // 5.
        // return <>
        //   <h1>fdgdg</h1>
            
        //  </>
        
        // 6.
        // return list.map(item => <Fragment key={index}>
        //     <h1>{item}</h1>
        // </Fragment>);
        
    }
}

export default Fragments;