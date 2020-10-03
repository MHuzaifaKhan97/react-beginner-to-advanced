import React, { Component } from 'react'

// there are more than one way to do conditional rendering.
// - if
// - ternary operator
// - logical && operator
// - switch case operator
// - conditional rendering with enum

class ConditionalRenderingExample extends Component {
    render() {
        return (
            <div>
                <SignUp isLoggedIn={false} />
            </div>
        )
    }
}

// IF

function UserLoggin(props){
    return <h1>Welcome Back!</h1>
}
function GuestLoggin(props){
    return <h1>Please Sign up!</h1>
}
function SignUp(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserLoggin />
    }else{
        return <GuestLoggin />
    }
}

// Logical AND (&&) 
// (true == true ) && alert("And Operators Run")
// (10 > 5) && alert("And Operators Run")

// Ternary Operator (?)
// condition ? true : false

//Switch Case
// function check(text){
//     switch(text){
//         case 'A': return 1;
//         case 'B': return 2;
//         case 'C': return 3;
//         default: console.log("No Match")
//     }
// }
// check("AA")







export default ConditionalRenderingExample;