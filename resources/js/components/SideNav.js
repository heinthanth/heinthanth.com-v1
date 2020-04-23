import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: "/"
        };
    }
    shouldComponentUpdate(nextprop, nextstate) {
        let $nav = $(".h3x-side-nav");
        let collapsed = nextprop.collapsed;
        if (!collapsed) {
            if (window.innerWidth < 992) {
                $("#main-content").css({
                    transform: `translateX(250px)`
                });
                $nav.css({
                    width: 250
                });
                if (
                    window.innerHeight > 450 &&
                    $(".h3x-side-nav-divider").height() == 0
                ) {
                    setTimeout(() => {
                        $(".h3x-side-nav-divider").animate(
                            {
                                height: "80%"
                            },
                            500
                        );
                    }, 500);
                }
            }
        } else {
            if (window.innerWidth < 992) {
                if (
                    window.innerHeight > 450 &&
                    $(".h3x-side-nav-divider").height() > 1
                ) {
                    $(".h3x-side-nav-divider").animate(
                        {
                            height: 0
                        },
                        500,
                        () => {
                            $("#main-content").css({
                                transform: `translateX(0)`
                            });
                            $nav.css({
                                width: 0
                            });
                        }
                    );
                } else {
                    $("#main-content").css({
                        transform: `translateX(0)`
                    });
                    $nav.css({
                        width: 0
                    });
                }
            }
        }
        return true;
    }
    componentDidMount() {
        this.setState({
            pathname: location.pathname
        });
        $(".h3x-side-nav-item").on("click", "a", e => {
            this.setState({
                pathname: e.target.pathname
            });
        });
        $(window).on("popstate", () => {
            this.setState({
                pathname: location.pathname
            });
        });
    }
    render() {
        return (
            <nav className="h3x-side-nav" id="h3x-side-nav">
                <ul>
                    <li className="h3x-side-nav-item">
                        <Link
                            to="/"
                            className={
                                this.state.pathname == "/" ? "active" : null
                            }
                        >
                            HOME
                        </Link>
                    </li>
                    <li className="h3x-side-nav-item">
                        <Link
                            to="/about"
                            className={
                                this.state.pathname == "/about"
                                    ? "active"
                                    : null
                            }
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li className="h3x-side-nav-item">
                        <Link
                            to="/skills"
                            className={
                                this.state.pathname == "/skills"
                                    ? "active"
                                    : null
                            }
                        >
                            SKILLS
                        </Link>
                    </li>
                </ul>
                <div className="h3x-side-nav-divider"></div>
            </nav>
        );
    }
}

export default SideNav;
