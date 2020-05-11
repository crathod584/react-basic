import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import * as serviceWorker from './serviceWorker';

const element = React.createElement('div',{className:'demoClass'},
    React.createElement('h1',null,'CHetan'),
    React.createElement('h1',null,'Tutorials'),
 
);
ReactDOM.render(element,document.getElementById('root'));

// const element  = React.createElement('h1',null,'chetan');

// ReactDOM.render(element,document.getElementById('root'));


// const element = (
//      <div className="demoClass">
//     <h1 >chetan</h1>
//     <h1 >Tutorials</h1>
//     </div>
//     );

//     ReactDOM.render(element,document.getElementById('root')); 


// const element = <h1 className="demoClass">chetan</h1>
// ReactDOM.render(element,document.getElementById('root'));

// const newelement = <h1 className="demoClass">Tutorials</h1>
// ReactDOM.render(newelement,document.getElementById('abc'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service worekers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
