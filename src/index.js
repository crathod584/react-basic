import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ConditionalRendring from './react-feature/ConditionalRendring'
import ListRendring from './react-feature/ListRendring'
import Form from './react-feature/Form'
import LifeCycle from './lifeCycle/LifeCycle';


// import Users from './porps-class/employee//user/Users' 
 
//-------------counter increment and decrement
// ReactDOM.render(<CounterComponent/>,document.getElementById('root'));
// import ClickFunctionComponent from './event/ClickFunction'
// import ClickCassComponent from './event/ClickClass'

// ReactDOM.render(<ConditionalRendring/>,document.getElementById('root'))
// ReactDOM.render(<ListRendring/>,document.getElementById('root'))
// ReactDOM.render(<Form value="chetan"/>,document.getElementById('root'))
ReactDOM.render(<LifeCycle />,document.getElementById('root'))



// ----------click event in class component
// ReactDOM.render(<ClickCassComponent/>,document.getElementById('root'))

// ------ click event in function component
// ReactDOM.render(<ClickFunctionComponent />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service worekers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
