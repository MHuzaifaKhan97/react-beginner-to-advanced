import React, { Component } from 'react'

class StateFull extends Component {

    constructor(){
        super();

        this.state = {
            data:[
                {"id":1,"name":"Huzaifa","age":23},
                {"id":2,"name":"Waleed","age":21},
                {"id":3,"name":"Abubakar","age":20},
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Class Based Component</h1>
                <table>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                    {
                        this.state.data.map((person) => {
                            return <tr key={person.id} >
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.age}</td>
                            </tr>
                        })
                    }
                </table>
            </div>
        )
    }
}

export default StateFull;