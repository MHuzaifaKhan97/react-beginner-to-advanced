import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch , NavLink} from 'react-router-dom';

class ReactRouterExample extends Component {
    render() {
        return (
            <>
                <Router>

                    <Navigation />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/gallary' component={Gallary} />
                        <Route path='/contact' component={Contact} />
                        <Route path='*' component={() => <h1>404 Not Found</h1>} />
                    </Switch>

                </Router>
            </>

        )
    }
}
export default ReactRouterExample;

function Navigation() {
    return (
        <ul>
            {/* <li><Link to='/' >Home</Link></li>
            <li><Link to='/about' >About</Link></li>
            <li><Link to='/gallary' >Gallary</Link></li>
            <li><Link to='/contact' >Contact</Link></li> */}

            <li><NavLink to='/' activeStyle={{color:'blue'}} >Home</NavLink></li>
            <li><NavLink to='/about' activeStyle={{color:'orange'}} >About</NavLink></li>
            <li><NavLink to='/gallary' activeStyle={{color:'green'}} >Gallary</NavLink></li>
            <li><NavLink to='/contact' activeStyle={{color:'yellow'}} >Contact</NavLink></li>
        </ul>
    )
}

function Home() {
    return <h1>Home</h1>
}
function About() {
    return <h1>About Us</h1>
}

const Contacts = ({match}) => <p>{match.param.id}</p>
class Contact extends Component{
    render() {
        const {url} = this.props.match;
        return (
            <div>
                <h1>Contact Us</h1>
                <strong>Select Contact ID</strong>
                <ul>
                    <li>
                        <Link to="/contact/1" >Contact 1</Link>
                    </li>
                    <li>
                        <Link to="/contact/2" >Contact 2</Link>
                    </li>
                    <li>
                        <Link to="/contact/3" >Contact 3</Link>
                    </li>
                    <li>
                        <Link to="/contact/4" >Contact 4</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

function Gallary() {
    return <h1>Gallary</h1>
}