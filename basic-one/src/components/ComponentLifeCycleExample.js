import React, { Component } from 'react'

class ComponentLifeCycleExample extends Component {

    constructor() {
        super();

        this.state = {
            data: 0,
        }

        this.setNumber = this.setNumber.bind(this)
    }

    setNumber() {
        this.setState({ data: this.state.data + 1 })
    }

    render() {
        return (
            <div>
                <h1>React LifeCycle</h1>
                <button onClick={this.setNumber} >INCREMENT</button>
                <Content myNumber = {this.state.data} />
            </div>
        )
    }
}

class Content extends Component{

        // execute before rendering, on both server and client side.
        componentWillMount() { 
            console.log("componentWillMount");
        }

        // execute after the first render only on the client side. this is where
        // AJAX request and DOM or state update should occur. this is also used
        // for integeration with other javascript frameworks and any function
        // with delay execution such as setTimeout or setInterval. 
        componentDidMount() { 
            console.log("componentDidMount");
        }
    
        // is invoked as soon as the props are updated before another render
        // is called. we triggered it from setNewNumber when we update the state.
        componentWillReceiveProps(newProps) {
            console.log("componentWillReceiveProps");
            console.log(newProps)
         }
    
        // should return true or false value. this will determine if the component
        // will be updated or not. it is set true by default.
        shouldComponentUpdate(nextProps,nextState) { 
            console.log("shouldComponentUpdate")
            return true
        }
    
        // is called just before rendering.
        componentWillUpdate(nextProps,nextState) { 
            console.log("componentWillUpdate")
        }
    
        // is called just after rendering
        componentDidUpdate(prevProps,prevState) {
            console.log("componentDidUpdate")
         }
    
        // is called after the component is unmount from the DOM. we are unmounting our 
        // component in main.js
    
        componentWillUnmount() { 
            console.log("componentWillUnmount")
        }
    
    

    render(){
        return(
            <>
                <h2>Content Component</h2>
                <h2>Number : {this.props.myNumber}</h2>

            </>
        )
    }
}
export default ComponentLifeCycleExample;