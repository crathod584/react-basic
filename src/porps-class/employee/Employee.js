import React from 'react';
// ------ Employee class component using porps with this keyword (have state and can use this keyword)

class Employee extends React.Component {
    render(){
        return <div>
         <h1>Employee Details</h1>

         Employee ID: <strong>{this.props.Id}</strong>
         Employee Name: <strong>{this.props.Name}</strong>

        </div>
    }
}

export default Employee;