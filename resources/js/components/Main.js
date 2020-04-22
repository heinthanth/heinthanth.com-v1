import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SideNav from "./SideNav";
import Footer from "./Footer";

class Main extends React.Component {
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
                    >
                        <span className="h3x-sidenav-toggler-icon"></span>
                    </button>
                </header>
                <div className="h3x-wrapper">
                    <div className="h3x-page-scroll-progress"></div>
                    <div className="h3x-row" id="main-container">
                        <SideNav />
                        <main id="main-content">
                            <div id="content">

                            </div>
                            <Footer/>
                        </main>
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("h3x_app__0xe000049"));

export default Main;
