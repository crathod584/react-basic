import React, { Component } from 'react';

class Form extends Component {
    state = {
        username:"",
        address:"",
        skill:"Angular"
    }
    
    handleUsername = event => {
        this.setState({
            username:event.target.value
        });
    }
    
    handleAddress = event => {
        this.setState({
            address:event.target.value
        });
    }

    handleSkills = event => {
        this.setState({
            skill:event.target.value
        });
    }

    onSubmit = event => {
        alert(`${this.state.username} ${this.state.address} ${this.state.skill}`);
        event.preventDefault();
    } 

    render(){
        let {username ,address, skill} = this.state;

        return <form onSubmit={this.onSubmit}>
            <div> 
                <label>Username</label>
                <input type="text" value={username} onChange={this.handleUsername}/>

                <label>Address</label>
                <textarea type="text" value={address} onChange={this.handleAddress}/>

                <label>Skills</label>
                <select value={skill} onChange={this.handleSkills}>
                   <option value="React">React</option>
                   <option value="Angular">Angular</option>
                   <option value="Vue">Vue</option>
                </select>
                <button type="submit">Submit</button>
            </div>
        </form>
    }
}

export default Form;