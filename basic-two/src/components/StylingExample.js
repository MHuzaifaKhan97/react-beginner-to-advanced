import React, { Component } from 'react'

class StylingExample extends Component {

    render() {

        // const mystyle = {
        //     color:'red',
        //     backgroundColor:'lightblue',
        //     padding:'20px 0px',
        //     textTransform:'uppercase',
        //     textShadow:'2px 4px 3px orange'
        // }

        return (
            <div>
                {/* Inline Styling */}
                {/* <h1 style={{color:'red',backgroundColor:'lightblue'}} >Hello There.</h1> */}

                {/* JavaScript Object */}
                {/* <h1 style={mystyle} >Hello There.</h1> */}
                
                {/* CSS File */}
                <h1 className="mystyle" >Hello There.</h1>
            </div>
        )
    }
}
export default StylingExample;