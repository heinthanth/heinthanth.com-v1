import React from "react";
import $ from "jquery";

class ScrolledProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0
        };
        this.setprogress = this.setprogress.bind(this);
    }
    componentDidMount() {
        $("#main-content").scroll(() => {
            this.setprogress();
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
            <div
                className="h3x-page-scroll-progress"
                style={{ width: `${this.state.scrolled}%` }}
            ></div>
        );
    }
}

export default ScrolledProgress;