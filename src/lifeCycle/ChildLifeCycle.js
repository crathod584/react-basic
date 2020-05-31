import React, { Component } from 'react';

class ChildLifeCycle extends Component {
    constructor(props){
        super(props);
        console.log('ChildLifeCycle constructor');
        this.state = {};
    }

    static getDerivedStateFromProps(props, state){
        console.log('ChildLifeCycle getDerivedStateFromProps');
        
        return null;
    }

    shouldComponentUpdate(){
        console.log('ChildLifeCycle Updating shouldComponentUpdate');
        return true;
      }
  
      getSnapshotBeforeUpdate(prevProp,prevState){
          console.log('ChildLifeCycle Updating getSnapshotBeforeUpdate');
          return null;
      }

      componentDidUpdate(){
        console.log('ChildLifeCycle Updatingcycle componentDidUpdate');
    }

    render(){
        console.log('ChildLifeCycle render');
        return <div>

        </div>
    }

    componentDidMount(){
        console.log('ChildLifeCycle componentDidMount');
    }
}

export default ChildLifeCycle;