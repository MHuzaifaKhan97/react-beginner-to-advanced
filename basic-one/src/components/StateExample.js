import React, { Component } from 'react'

class StateExample extends Component {

    state = {
        header:"Header from State",
        content:"Content from State"
    }

    changeState = () => this.setState({header:"Header",content:"Content"})

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h1>{this.state.content}</h1>
                <button onClick={this.changeState} >Change State</button>
            </div>
        )
    }
}
export default StateExample;