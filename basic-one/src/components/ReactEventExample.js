import React, { Component } from 'react'

class ReactEventExample extends Component {

    state = {
        name:"",
        value:""
    }

    updateState = () => {
        this.setState({
            name:this.state.value
        })
    }
    handleChange = (e) => this.setState({value:e.target.value})
    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.handleChange(e)} />
                <button onClick={this.updateState} >UPDATE STATE</button>
                <h3>Name : {this.state.name}</h3>
            </div>
        )
    }
}
export default ReactEventExample;