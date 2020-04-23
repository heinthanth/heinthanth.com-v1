import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition, TransitionGroup } from "react-transition-group";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import SkillsPage from "../pages/Skills";

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main id="content">
                <AnimatedContent />
            </main>
        );
    }
}

const AnimatedContent = props => {
    let location = useLocation();
    return (
        <SwitchTransition>
            <CSSTransition
                classNames="fade"
                timeout={600}
                key={location.key}
            >
                <Switch location={location}>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/about">
                        <AboutPage />
                    </Route>
                    <Route exact path="/skills">
                        <SkillsPage />
                    </Route>
                </Switch>
            </CSSTransition>
        </SwitchTransition>
    );
};

export default Content;
