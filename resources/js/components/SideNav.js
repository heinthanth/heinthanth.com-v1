import React from "react";
import { Link } from "react-router-dom";

class SideNav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav
                className="h3x-side-nav"
                id="h3x-side-nav"
                style={{ width: `${this.props.collapsed ? '0px' : '250px'}` }}
            >
                <ul>
                    <li className="h3x-side-nav-item">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="h3x-side-nav-item">
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li className="h3x-side-nav-item">
                        <Link to="/skills">SKILLS</Link>
                    </li>
                </ul>
                <div className="h3x-side-nav-divider"></div>
            </nav>
        );
    }
}

export default SideNav;
