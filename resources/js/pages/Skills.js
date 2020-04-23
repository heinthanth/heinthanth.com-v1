import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import ScrollTopOnMount from "../components/ScrollTopOnMount";

class SkillsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animated: false
        };
        this.animate = this.animate.bind(this);
        this.hackskillbar = this.hackskillbar.bind(this);
    }
    componentDidMount() {
        document.title = "Skills | H31iUMx49";
        $(window).trigger("pageloaded");
        this.hackskillbar();
    }
    hackskillbar() {
        let $skillbar = document.getElementById("skill-container");
        let height = window.innerHeight;
        $("#main-content").scroll(() => {
            if ($($skillbar).length) {
                let pos = $skillbar.getBoundingClientRect().top;
                if (!this.state.animated) {
                    if (pos < height / 2) {
                        this.animate();
                        this.setState({
                            animated: true
                        });
                    }
                }
            }
        });
    }
    animate() {
        $(".h3x-skill").each((i, elem) => {
            var $percent = $(elem)
                .find(".h3x-skill-progress")
                .attr("data-percent");
            var $label = $(elem).find(".h3x-skill-progress-label");
            $(elem)
                .find(".h3x-skill-progress")
                .animate(
                    {
                        width: $percent
                    },
                    {
                        duration: 2000,
                        step: (now, fx) => {
                            $label.text(`${Math.floor(now)} %`);
                        }
                    }
                );
        });
    }
    render() {
        return (
            <React.Fragment>
                <ScrollTopOnMount />
                <section id="about" className="h3x-section h3x-section-single">
                    <img
                        src="/image/undraw_hacker_mind.svg"
                        alt="Hein Thanth"
                        className="h3x-img-responsive"
                    />
                    <h1 className="h3x-section-title">Just points</h1>
                    <p>
                        In short, I've solid experience and knowledge on{" "}
                        <span className="h3x-font-weight-bold">
                            HTML5, CSS3, Javascript ECMA 2015, jQuery,
                            Bootstrap, PHP7, Laravel 6, SQL, Git, Linux.
                        </span>
                    </p>
                    <p>
                        I can code in <b>C++, Java, Python, Bash.</b> Favourite
                        is <b>PHP</b>. Also, I can handle{" "}
                        <b>Windows, Linux, macOS</b> well. If you want to know
                        my story, just keep reading!
                    </p>
                    <div className="h3x-skill-container" id="skill-container">
                        <div className="h3x-skill">
                            <div className="h3x-skill-info">
                                <div className="h3x-skill-label">HTML</div>
                                <div className="h3x-skill-progress-label"></div>
                            </div>
                            <div className="h3x-skill-bar">
                                <div
                                    className="h3x-skill-progress"
                                    data-percent="90%"
                                ></div>
                            </div>
                        </div>
                        <div className="h3x-skill">
                            <div className="h3x-skill-info">
                                <div className="h3x-skill-label">
                                    CSS (SCSS, SASS), Bootstrap
                                </div>
                                <div className="h3x-skill-progress-label"></div>
                            </div>
                            <div className="h3x-skill-bar">
                                <div
                                    className="h3x-skill-progress"
                                    data-percent="85%"
                                ></div>
                            </div>
                        </div>
                        <div className="h3x-skill">
                            <div className="h3x-skill-info">
                                <div className="h3x-skill-label">
                                    JavaScript, jQuery
                                </div>
                                <div className="h3x-skill-progress-label"></div>
                            </div>
                            <div className="h3x-skill-bar">
                                <div
                                    className="h3x-skill-progress"
                                    data-percent="75%"
                                ></div>
                            </div>
                        </div>
                        <div className="h3x-skill">
                            <div className="h3x-skill-info">
                                <div className="h3x-skill-label">
                                    PHP, Laravel
                                </div>
                                <div className="h3x-skill-progress-label"></div>
                            </div>
                            <div className="h3x-skill-bar">
                                <div
                                    className="h3x-skill-progress"
                                    data-percent="85%"
                                ></div>
                            </div>
                        </div>
                        <div className="h3x-skill">
                            <div className="h3x-skill-info">
                                <div className="h3x-skill-label">
                                    SQL, NoSQL
                                </div>
                                <div className="h3x-skill-progress-label"></div>
                            </div>
                            <div className="h3x-skill-bar">
                                <div
                                    className="h3x-skill-progress"
                                    data-percent="60%"
                                ></div>
                            </div>
                        </div>
                        <div className="h3x-skill">
                            <div className="h3x-skill-info">
                                <div className="h3x-skill-label">
                                    Node.js, React.js
                                </div>
                                <div className="h3x-skill-progress-label"></div>
                            </div>
                            <div className="h3x-skill-bar">
                                <div
                                    className="h3x-skill-progress"
                                    data-percent="65%"
                                ></div>
                            </div>
                        </div>
                        <div className="h3x-skill">
                            <div className="h3x-skill-info">
                                <div className="h3x-skill-label">Git</div>
                                <div className="h3x-skill-progress-label"></div>
                            </div>
                            <div className="h3x-skill-bar">
                                <div
                                    className="h3x-skill-progress"
                                    data-percent="70%"
                                ></div>
                            </div>
                        </div>
                        <div className="h3x-skill">
                            <div className="h3x-skill-info">
                                <div className="h3x-skill-label">
                                    Linux, Linux Server, Docker
                                </div>
                                <div className="h3x-skill-progress-label"></div>
                            </div>
                            <div className="h3x-skill-bar">
                                <div
                                    className="h3x-skill-progress"
                                    data-percent="80%"
                                ></div>
                            </div>
                        </div>
                        <div className="h3x-skill">
                            <div className="h3x-skill-info">
                                <div className="h3x-skill-label">
                                    Few programming languages & Logic
                                </div>
                                <div className="h3x-skill-progress-label"></div>
                            </div>
                            <div className="h3x-skill-bar">
                                <div
                                    className="h3x-skill-progress"
                                    data-percent="85%"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <h1 className="h3x-section-title">
                        Skills as my Life Story
                    </h1>
                    <p>
                        Believe or not! I've interested in Computer Technologies
                        since my childhood. I've been taught Computer Basics
                        with Windows 7 after my Grade-5 final exam, a fine
                        summer holidays. I've ever use Adobe Photoshop since
                        that time.
                    </p>
                    <p>
                        <img
                            className="h3x-img-responsive"
                            src="/image/android.png"
                            alt="Android Logo"
                        />
                        After that, I've read many books about how to use,
                        handle, set preferences, and even, how to root Android
                        phones. It can be said I use Androids since that time
                        when Android phones spreaded out to Myanmar markets.
                    </p>{" "}
                    <p>
                        <img
                            className="h3x-img-responsive"
                            src="/image/cmd-helloworld.png"
                            alt="Hello, World! in CMD"
                        />
                        I've learned how to write shell scripts (Batch/CMD
                        scripts) for Windows by tracing the codes that are used
                        for rooting / unlocking bootloader for mobiles.
                    </p>
                    <p>
                        When I was 13~14, I learn how to write HTML and how to
                        perform Phishing with Facebook and Gmail.
                    </p>
                    <p>
                        <img
                            className="h3x-img-responsive"
                            src="/image/the-hackers-underground-handbook.jpg"
                            alt="The Hacker's Underground Handbook"
                        />
                        I was a small script kiddie who know no line of PHP
                        code, just copy and use it! I've read the basic
                        methodology of Hacking and cracking from the book called
                        "The Hacker's Underground Handbook" by David Melnichuk
                        and learned about types of hacking, systems and hashes.
                    </p>
                    <p>
                        <img
                            className="h3x-img-responsive"
                            src="/image/windows-vs-linux.png"
                            alt="Not more windows, Just Linux"
                        />
                        From that book, I've been introduced with Linux for the
                        first time. He said,{" "}
                        <q>
                            You must master Linux to be a hacker. As a hacker,
                            you'll need to know the behavior of the target!
                        </q>
                        . It's quite reasonable. From that time, I wanted to use
                        or try Linux. But internet fee is quiet expansive and my
                        family allow me just One Gigabyte for 3 days or 5 days,
                        I'm not sure. And, the size of Ubuntu iso is about 1.8
                        GB, I think. I wasn't able to download. So, I searched
                        for Linux iso that is just a few megabytes large.
                    </p>
                    <p>
                        <img
                            className="h3x-img-responsive"
                            src="/image/kali-linux.png"
                            alt="Kali Linux"
                        />
                        While searching, I found a Kali Linux Network Installer
                        Image, that's only 46 or 49MB large. A 14 years old kid
                        didn't know it was Network Installer or Full Installer.
                        I still remember, my laptop hard drive was formatted by
                        the Kali Linux Net-installer. Most of my childhood's
                        digital memories were gone! Can you imagine my feelings
                        at that time?
                    </p>
                    <p>
                        Also, from that book I've learned some HTML basic. Then,
                        later, I've learned{" "}
                        <b>CSS, SCSS, SASS, JS, jQuery, PHP, Laravel, SQL</b>{" "}
                        with the help of{" "}
                        <a
                            href="http://w3schools.com"
                            target="_blank"
                            className="h3x-more-info-link"
                        >
                            W3Schools
                        </a>{" "}
                        to some extends. And, till now, due to self studies and
                        others resources, I can code in multi languages and have
                        solid knowledge in Linux and other OSes ....
                    </p>
                </section>
            </React.Fragment>
        );
    }
}

export default SkillsPage;
