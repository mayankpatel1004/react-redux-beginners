import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const FooterBar = (props) => {
    return (
        <div>
            <nav className="navbar1 navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link btn" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link btn" to="/privacy-policy">Privacy</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link btn" to="/terms-conditions">Terms & Conditions</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default withRouter(FooterBar);