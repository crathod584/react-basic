import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import * as serviceWorker from './serviceWorker';

//----------------Calling arrow funtion with props (or passing valu in component)
 const StudentDetails = (student) =>{
  return <div>
   
   <p><label>Student ID: <strong>{student.ID}</strong></label></p>
   <p><label>Student Name: <strong>{student.Name}</strong></label></p>
     </div>  
 }
ReactDOM.render(<StudentDetails ID="121" Name="Chetan"/>,document.getElementById('root'));


//----------------Calling funtion with props (or passing valu in component) using varible
// function StudentDetails(student){
//   return <div>
   
// <p><label>Student ID: <strong>{student.ID}</strong></label></p>
// <p><label>Student Name: <strong>{student.Name}</strong></label></p>
//   </div>  
// }
// const element = <StudentDetails ID="12" Name="Chetan"/>;
// ReactDOM.render(element,document.getElementById('root'));



//----------------Calling funtion with props (or passing valu in component)
// function StudentDetails(student){
//   return <div>
   
// <p><label>Student ID: <strong>{student.ID}</strong></label></p>
// <p><label>Student Name: <strong>{student.Name}</strong></label></p>
//   </div>  
// }
// ReactDOM.render(<StudentDetails ID="1" Name="Chetan"/>,document.getElementById('root'));

// -------------------------Caling arrow funtion as component in ReactDOM.render method
// const Greet = () => {
//   return <h1>CHetan-3</h1>
// }
// ReactDOM.render(<Greet/>,document.getElementById('root'));



// ----------------------------------Caling funtion as component in ReactDOM.render method
// function Greet(){
//   return <h1>CHetan-1</h1>
// }
// ReactDOM.render(<Greet/>,document.getElementById('root'));



// ------------------------------------Caling funtion in ReactDOM.render method
// function Greet(){
//   return <h1>CHetan-1</h1>
// }
// ReactDOM.render(Greet(),document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service worekers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
