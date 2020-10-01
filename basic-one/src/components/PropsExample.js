import React, { Component } from 'react'

class PropsExample extends Component {
    render() {
        const {data} = this.props;
        console.log(typeof data)
        return (
            <div>
                <h1>Props Example</h1>
                <p>get data from props</p>
                <ul style={{listStyle:'none'}}>
                    { typeof data === "object" ?
                        data.map((person) => {
                            return <li key={person.id} >
                                <p>{person.name}</p>
                                <p>{person.age}</p>
                            </li>
                        })
                        :
                    <p>{data}</p>
                    }
                </ul>
            </div>
        )
    }
}

PropsExample.defaultProps = {
    data:"Data is not available now",
    page:"App Page"
}

export default PropsExample;