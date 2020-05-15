import React from 'react';

class StateExample extends React.Component {
    
    constructor(){
        super();
        this.state = {
            message:"chetan's project"
        }
    }

    

    render(){
        return <div>
           
        <h1> {this.state.message}</h1>
        <button onClick={ ()=> this.checkStatus()}>Check project Status</button>
        </div>
    }

    checkStatus(){
        this.setState({
            message:"Project Started"
        });
    }
}

export default StateExample;