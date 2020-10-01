import React, { Component } from 'react'

class PropsValidation extends Component {

    render() {
    
        console.log(React)
        return (
            <div>
                Array:{this.props.propArray} <br />
                Bool: {this.props.propBool ? "True..." : "False..."} <br />
                Func: {this.props.propFunc(3)} <br />
                Number: {this.props.propNumber} <br />
                String: {this.props.propString} <br />
                Object: {this.props.propObject.objName1} <br />
                Object: {this.props.propObject.objName2} <br />
                Object: {this.props.propObject.objName3} <br />

            </div>
        )
    }
}

// PropsValidation.propTypes = {
//     propArray: React.PropTypes.array.isRequired,
//     propBool:React.PropTypes.bool.isRequired,
//     propFunc:React.PropTypes.func,
//     propNumber:React.PropTypes.number,
//     propString:React.PropTypes.string,
//     propObject:React.propTypes.object,    
// }

PropsValidation.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool:true,
    propFunc:function(e) {return e},
    propNumber:2,
    propString:"Huzaifa Khan",
    propObject:{
        objName1:"objValue1",
        objName2:"objValue2",
        objName3:"objValue3",
    }
}


export default PropsValidation;