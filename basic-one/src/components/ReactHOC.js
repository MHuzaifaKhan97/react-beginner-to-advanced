import React, { Component } from 'react'

export default function ReactHOC(HOCComponent) {

    // React HOC is an advanced technique for reusing component logic. it is a function
    // that takes a COMPONENT and return a new COMPONENT.
    // It's not a feature in React API. but a pattern that emerges from React compositional
    // nature. They are similar to JS functions used for adding additional functionalities
    // to the existing component.
    // A HOC function accept another function as an argument. the map function is the best 
    // example to understand this. 
    // The main goal is to decompose the component logic into simpler and smaller functions
    // that can be reused as you need.
    
    //SYNTAX:
    // const newComponent = higherOrderComponent(WrappedComponent)

    return class extends Component{
        render() {
            console.log(this.props)
            return (
                <div>
                    <HOCComponent>   
                    </HOCComponent>           
                </div>
            )
        }
    }

}


// Simple Example
function add(a,b){
    console.log(a+b);
}
function higherOrder(a,addReference){
    return addReference(a,10)
}

higherOrder(30,add)