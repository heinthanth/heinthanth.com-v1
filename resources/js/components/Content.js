import React from "react";
import IndexPage from "../pages/Index";
import { Route } from "react-router-dom";

class Content extends React.Component {
    render() {
        return (
            <main id="h3x_main__0xe000049">
                <Route exact path="/">
                    <IndexPage />
                </Route>
            </main>
        );
    }
}

export default Content;