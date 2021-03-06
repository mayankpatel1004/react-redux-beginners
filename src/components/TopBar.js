import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const TopBar = (props) => {
    return (
        <div>
            <nav className="navbar1 navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/"><img src="https://www.rexliquor.com/theme/default/assets/images/logo/logo.png" style={{ height: 30 }} alt="Logo" /></Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/locations">Locations</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blogs">Blogs</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default withRouter(TopBar);