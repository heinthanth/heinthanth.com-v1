import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SideNav from "./SideNav";
import Footer from "./Footer";
import Content from "./Content";
import { warnxss } from "../utils/warn";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0,
            navbarcollapsed: true
        };
        this.setprogress = this.setprogress.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
    }

    componentDidMount() {
        warnxss();
        $("#main-content").scroll(() => {
            this.setprogress();
        });
        $(window).on("pushstate", () => {
            console.log("route changed!");
            //window.setTimeout(() => {this.setState({navbarcollapsed: true})}, 1000);
        });
    }

    toggleNav() {
        let status = !this.state.navbarcollapsed;
        this.setState({
            navbarcollapsed: status
        });
    }

    setprogress() {
        var winScroll = document.getElementById("main-content").scrollTop;
        var height =
            document.getElementById("main-content").scrollHeight -
            document.getElementById("main-content").clientHeight;
        if (height > 0) {
            var scrolled = (winScroll / height) * 100;
            this.setState({
                scrolled: scrolled
            });
        } else {
            this.setState({
                scrolled: 0
            });
        }
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
                    <div
                        className="h3x-page-scroll-progress"
                        style={{ width: `${this.state.scrolled}%` }}
                    ></div>
                    <div className="h3x-row" id="main-container">
                        <SideNav collapsed={this.state.navbarcollapsed} />
                        <div
                            id="main-content"
                            style={{
                                transform: `translateX(${
                                    this.state.navbarcollapsed ? "0px" : "250px"
                                })`
                            }}
                        >
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
