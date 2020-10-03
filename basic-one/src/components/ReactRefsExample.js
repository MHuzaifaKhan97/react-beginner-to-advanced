import React, { Component } from 'react'

class ReactRefsExample extends Component {

    // Refs is a shorthand used for references in React. it is similar to key in React.
    // it is an attribute which make it possible to store references to particular DOM
    // node or React Elements. it provides a way to access React DOM node or React
    // Elements and how to interact with it. it is used when we want to change the value
    // of child component, without making use of props.

    // WHEN WE USED REFS:
    // - when we need DOM measurements such as managing focus, text selection, or media playback
    // - it is used in triggering imperitive animations.
    // - when integrating third-party DOM liberaries.
    // - also used as in callbacks.

    // WHEN TO NOT USE REFS:
    // - its use should be avoided for anything that can be done declaratively. for example
    // instead of using open() and close() methods on a Dialog component, you need to pass
    // as isOpen prop to it.
    // - you should avoid overuse of the refs.

    constructor(){
        super();

        this.callRef = React.createRef();
        this.divRef = React.createRef();
    }

    handleClick = () => {
        this.callRef.current.focus();
        this.divRef.current.style.backgroundColor = 'green'
        this.divRef.current.style.padding = '20px'
        this.divRef.current.style.color = 'white'
    }
    render() {
        const node = this.callRef;
        console.log(node)
        return (
            <div ref={this.divRef} >
               <h2>Adding Ref to DOM element</h2>
               <input 
                    type="text"
                    ref={this.callRef}
               />
               <input 
                    type="button"
                    value="Focus Input"
                    onClick={this.handleClick}
               />
            </div>
        )
    }
}
export default ReactRefsExample;