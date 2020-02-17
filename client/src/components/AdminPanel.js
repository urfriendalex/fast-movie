import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.reset = this.reset.bind(this)
    }

    reset() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div className="adminPanel">
                <h1>Admin Panel</h1>
                <div className='btn-group'>
                    <Link to='admin/user-list'>
                        <button className="go-to-list-btn users">
                            Users
                        </button>
                    </Link>
                    <Link to='admin/movie-list'>
                        <button className="go-to-list-btn movies">
                            Movies
                        </button>
                    </Link>
                    <Link to='admin/award-list'>
                        <button className="go-to-list-btn awards">
                            Awards
                        </button>
                    </Link>
                    <Link to='admin/usersmovies-list'>
                        <button className="go-to-list-btn usersmovies">
                            Users Movies
                        </button>
                    </Link>
                    <Link to='admin/awardsmoives-list'>
                        <button className="go-to-list-btn awardsmovies">
                            Awards Movies
                        </button>
                    </Link>

                </div>
            </div>
        )
    }
}




export default Nav;