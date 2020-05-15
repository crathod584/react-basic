import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import Users from './porps-class/user/Users'
import Employee from './porps-class/employee/Employee'

// ------ User class component using porps with this keyword
ReactDOM.render(<Employee Id="1" Name="Chetan"/>,document.getElementById('root'));

// ------ User class component using function component
// ReactDOM.render(<Users/>,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service worekers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
