import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
        this.reset = this.reset.bind(this)
    }

    reset() {
        this.setState({visible: false});
    }

    render(){
        return (
            <nav className="navbar">
                    <ul className="navbar-links">
                        <li className="nav-item">
                            { <NavLink className="nav-link" activeClassName='active' to="/random-movie">Random Movie</NavLink>}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active' to="/app">App</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active' to="/about">About</NavLink>
                        </li>
                        {this.props.admin ? 
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active' to="/admin">Admin</NavLink>
                        </li>
                        : null
                        }   
                    </ul>
                    <NavLink className="nav-user" activeClassName='active' to="/user-panel">
                        <FontAwesomeIcon icon={faUser} /> 
                    </NavLink>
            </nav>
        )
    }
}

export default Nav;