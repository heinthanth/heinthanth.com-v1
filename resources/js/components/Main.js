import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import $ from "jquery";
import ScrolledProgress from "./ScrolledProgress";
import SideNav from "./SideNav";
import Footer from "./Footer";
import Content from "./Content";
import { warnxss } from "../utils/warn";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarcollapsed: true
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    componentDidMount() {
        warnxss();
        $(window).on("pageloaded", () => {
            setTimeout(() => {
                this.setState({
                    navbarcollapsed: true
                });
            }, 600);
        });
    }

    toggleNav() {
        let status = !this.state.navbarcollapsed;
        this.setState({
            navbarcollapsed: status
        });
    }

    render() {
        return (
            <Router>
                <header className="h3x-navbar">
                    <Link to="/" className="h3x-navbar-logo">
                        H31N TH4NTH
                    </Link>
                    <button
                        className="h3x-sidenav-toggler"
                        id="h3x-sidenav-toggler"
                        onClick={this.toggleNav}
                    >
                        <span className="h3x-sidenav-toggler-icon"></span>
                    </button>
                </header>
                <div className="h3x-wrapper">
                    <ScrolledProgress />
                    <div className="h3x-row" id="main-container">
                        <SideNav collapsed={this.state.navbarcollapsed} />
                        <div id="main-content">
                            <Content />
                            <Footer />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("h3x_app__0xe000049"));

export default Main;
