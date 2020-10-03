import React, { Component } from 'react'

class SimpleExample extends Component {

    state = {
        data: "Initial Data",
    }

    updateState = (e) => {
        this.setState({ data: e.target.value })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter Something"
                    onChange={(e) => this.updateState(e)}
                />
                <h3>Data: {this.state.data}</h3>
            </div>
        )
    }
}

class ReactFormExample extends Component {

    state = {
        name: '',
        email: '',
        age: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="name" placeholder="Enter Name" onChange={e => this.handleChange(e)} />
                    <input type="email" name="email" placeholder="Enter Email" onChange={e => this.handleChange(e)} />
                    <input type="number" name="age" placeholder="Enter Age" onChange={e => this.handleChange(e)} />
                    <button type="submit"> Submit </button>
                </form>
                <br />
                <div>
                    <h3>Name: {this.state.name}</h3>
                    <h3>Email: {this.state.email}</h3>
                    <h3>Age: {this.state.age}</h3>
                </div>
            </div>
        )
    }
}

export {
    SimpleExample,
    ReactFormExample
};