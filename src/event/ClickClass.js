import React from 'react';

class ClickCassComponent extends React.Component {
    render(){
        return <div>
            <button onClick={this.clickMe} >Click me class</button>
        </div>
    }


    clickMe(){
        alert('button clicked')
    }
}

export default ClickCassComponent;