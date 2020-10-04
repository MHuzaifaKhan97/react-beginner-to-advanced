import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class ReactRouter extends Component {
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
                </Switch>

              </Router>  
            </>
        )
    }
}
export default ReactRouter;

const Home = () => <h1>Home Component</h1>
const About = () => <h1>About Component</h1>
const Gallary = () => <h1>Gallary Component</h1>
const Contact = () => <h1>Contact Component</h1>

function Navigation(){
    return(
        <nav>
            <ul className="nav">
            <li> <Link className="nav-link" to='/' >Home</Link> </li>
            <li> <Link className="nav-link" to='/about' >About</Link> </li>
            <li> <Link className="nav-link" to='/gallary' >Gallary</Link> </li>
            <li> <Link className="nav-link" to='/contact' >Contact</Link> </li>
        </ul>
        </nav>
    )
}    