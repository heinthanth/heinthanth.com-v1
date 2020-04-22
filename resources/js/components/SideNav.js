import React from "react";
import { Link } from "react-router-dom";

class SideNav extends React.Component {
    render() {
        return (
            <nav
                className="h3x-side-nav"
                id="h3x-side-nav"
                data-expanded="false"
            >
                <ul>
                    <li className="h3x-side-nav-item">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="h3x-side-nav-item">
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li className="h3x-side-nav-item">
                        <Link to="/skill">SKILLS</Link>
                    </li>
                </ul>
                <div className="h3x-side-nav-divider"></div>
            </nav>
        );
    }
}

export default SideNav;
