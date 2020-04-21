import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import Content from "./Content";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navopen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        let status = !this.state.navopen;
        this.setState({
            navopen: status
        });
    }

    render() {
        return (
            <Router>
                <NavBar toggleNav={this.toggleNav} />
                {this.state.navopen ? <SideNav /> : <Content />}
            </Router>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("h3x_app__0xe000049"));
