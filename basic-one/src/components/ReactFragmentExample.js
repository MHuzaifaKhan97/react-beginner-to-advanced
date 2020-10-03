import React, { Component } from 'react'

class ReactFragmentExample extends Component {

    // We used Fragement instead of div because:
    // - it makes the execution of code faster as compared to div.
    // - it take less memory
    render() {
        return (
            <React.Fragment>
                <h2>React Fragement</h2>
                <p>It makes the execution of code faster as compared to div</p>
                <p>It take less memory</p>
            </React.Fragment>
        )
    }
}
export default ReactFragmentExample;