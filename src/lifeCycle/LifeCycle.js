import React, { Component } from 'react';
import ChildLifeCycle from './ChildLifeCycle';

class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log('MountingCycle constructor');
        this.state = {};
    }

    static getDerivedStateFromProps(props, state){
        console.log('MountingCycle getDerivedStateFromProps');
        console.log('Updating getDerivedStateFromProps');
        
        return null;
    }

    shouldComponentUpdate(){
      console.log('Updating shouldComponentUpdate');
      return true;
    }

    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log('Updating getSnapshotBeforeUpdate');
        return null;

    }

    changeState = () => {
        this.setState({
            name:'chetan'
        });
    }

    render(){
        
        console.log('MountingCycle render');
        return <div>
          <ChildLifeCycle/>
          <button onClick={this.changeState}>change state</button>
        </div>
    }

    componentDidMount(){
        console.log('MountingCycle componentDidMount');
    }

    componentDidUpdate(){
        console.log('Updatingcycle componentDidUpdate');
    }
}

export default LifeCycle;