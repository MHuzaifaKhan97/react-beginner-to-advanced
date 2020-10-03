import React, { Component } from 'react'

class ReactListExample extends Component {
    state = {
        data: ["Huzaifa", "Waleed", "Abubakar", "Saad", "Usama", "Arsalan"]
    }
    render() {
        return (
            <ul>
                {this.state.data.map((data, index) => {
                    console.log(index)
                    return <ListItem data={data} index={index} />
                })}
            </ul>
        )
    }
}
function ListItem(props) {
    console.log(props)
    return (
        <li key={props.index} style={{ listStyle: 'none', fontWeight: '700', fontSize: '28px' }}>
            Name : {props.data}
            Index : {props.index}
        </li>
    )
}

export default ReactListExample;