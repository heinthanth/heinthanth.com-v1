import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import ScrollTopOnMount from "../components/ScrollTopOnMount";

class HomePage extends React.Component {
    componentDidMount() {
        document.title = "Hein Thanth | H31iUMx49";
        $(window).trigger("pageloaded");
    }
    render() {
        return (
            <React.Fragment>
                <ScrollTopOnMount/>
                <section id="about" className="h3x-section">
                    <img
                        src="/image/profile.jpg"
                        id="profile-picture"
                        alt="Hein Thanth"
                        className="h3x-img-responsive"
                    />
                    <h1 className="h3x-section-title">WHO AM I</h1>
                    <p>
                        As you know, <q>Hein Thant Maung Maung</q> is my legal
                        full name. But to be unique, I took <q>Hein Thanth</q>{" "}
                        as a nickname. Love cats and passionate about making
                        something new and breaking stuffs!
                    </p>
                    <Link to="/about" className="h3x-more-info-link">
                        read more about me
                    </Link>
                </section>
                <section
                    id="skills"
                    className="h3x-section h3x-text-align-right"
                >
                    <img
                        src="/image/undraw_hacker_mind.svg"
                        alt="Hein Thanth"
                        className="h3x-img-responsive"
                    />
                    <h1 className="h3x-section-title">WHAT CAN I DO</h1>
                    <p className="h3x-text-align-right">
                        Since I've learned Web Development since the age of
                        13/14, I have enough experience on Web standard and
                        workflow. and can code in Python, C/C++, Java and have
                        intermediate knowledge and experience on Linux
                    </p>
                    <Link to="/skills" className="h3x-more-info-link">
                        explore more in details
                    </Link>
                </section>
                <section id="contact" className="h3x-section">
                    <h1 className="h3x-section-title">GET IN TOUCH WITH ME</h1>
                    <p>Reach me via - </p>
                    <ul className="h3x-contact-social-link">
                        <li>
                            <a
                                href="https://facebook.com/heinthanth"
                                target="_blank"
                                title="Facebook"
                            >
                                <span className="ion-social-facebook"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/heinthanth"
                                target="_blank"
                                title="Instagram"
                            >
                                <span className="ion-social-instagram"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/heinthanth"
                                target="_blank"
                                title="Twitter"
                            >
                                <span className="ion-social-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/heinthanth"
                                target="_blank"
                                title="Github"
                            >
                                <span className="ion-social-github"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://hackthebox.eu/profile/244034"
                                target="_blank"
                                title="Hack The Box"
                            >
                                <span className="ion-cube"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:contact@heinthanth.com"
                                target="_blank"
                                title="Email"
                            >
                                <span className="ion-android-mail"></span>
                            </a>
                        </li>
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}

export default HomePage;
