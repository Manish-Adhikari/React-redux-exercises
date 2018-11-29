import React from "react";

class Loader extends React.Component {

    render() {
        return (
            <div className="ui active inverted dimmer">
                <div className="ui large text loader">Loading...</div>
            </div>
        );
    }
}

export default Loader;