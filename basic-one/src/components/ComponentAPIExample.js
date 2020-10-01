import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class ComponentAPIExample extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDOMNodeHandler = this.findDOMNodeHandler.bind(this);
    }

    // Set State
    setStateHandler() {
        let item = "setState";
        let myArray = this.state.data.slice();
        myArray.push(item)
        console.log(myArray)

        this.setState({
            data: myArray
        })
    }
    // Force Update (manually update the component)
    forceUpdateHandler(){
        this.forceUpdate();
    }
    // Find DOM Node
    findDOMNodeHandler(){
        let myDiv = document.getElementById('myDiv')
        ReactDOM.findDOMNode(myDiv).style.color = 'green'
    }

    render() {
        return (
            <div>
                <button onClick={this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>    
                <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>Random Number: {Math.random()}</h4>
                    <button onClick={this.findDOMNodeHandler}>FIND DOM NODE</button>
                <div id="myDiv">
                    <h4>
                    Hello World
                    </h4>
                </div>
            </div>
        )
    }
}
export default ComponentAPIExample;