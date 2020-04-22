import React from "react";
import $ from "jquery";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
		};
		this.hack = this.hack.bind(this);
    }

    hack() {
        let height =
            document.getElementById("main-content").scrollHeight -
            document.getElementById("main-content").clientHeight;
        if (height <= 0) {
            if (!$(".h3x-fake-footer").length) {
                $("#main-content").append(
                    `<div class="h3x-active-footer h3x-fake-footer">${$(
                        "footer"
                    ).html()}</div>`
                );
            }
            $("footer").removeClass("h3x-active-footer");
            $("footer").css({
                visibility: "hidden"
            });
        } else {
            $(".h3x-fake-footer").remove();
            $("footer").addClass("h3x-active-footer");
            $("footer").css({
                visibility: "visible"
            });
        }
    }

    componentDidMount() {
		this.hack();
		$(window).resize(() => { this.hack(); })
	}

    render() {
        return (
            <footer>
                <span className="h3x-svg-font">
                    <img src="/icons/cc.svg" alt="Creative Common" />
                </span>{" "}
                2020{" "}
                <span className="h3x-ht-changeable">
                    {this.state.collapsed ? "HT" : "Hein Thanth"}.
                </span>{" "}
                <a
                    rel="license"
                    className="h3x-color-black"
                    href="http://creativecommons.org/licenses/by-sa/4.0/"
                >
                    CC-BY-SA-4.0
                </a>
            </footer>
        );
    }
}

export default Footer;
