import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import ClickFunctionComponent from './event/ClickFunction'
import ClickCassComponent from './event/ClickClass'
 
// ----------click event in class component
ReactDOM.render(<ClickCassComponent/>,document.getElementById('root'))

// ------ click event in function component
// ReactDOM.render(<ClickFunctionComponent />,document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service worekers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
