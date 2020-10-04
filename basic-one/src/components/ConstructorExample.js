import React, { Component } from 'react'

class ConstructorExample extends Component {

    constructor(props){
        super(props);

        this.state = {
            data:'www.reactjs.org'
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(){
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <h3>React Constructor Example</h3>
                <input type="text" value={this.state.data} />
                <button onClick={this.handleEvent} >Please Click</button>
            </div>
        )
    }
}

export default ConstructorExample;