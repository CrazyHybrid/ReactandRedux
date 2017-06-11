/**
 * Created by ForYouForever on 4/18/2017.
 */
import React from "react";
import ReactDOM from "react-dom";

class Body_contents extends React.Component {

    render() {
        return (
            <div className="panel-body">
                <div id="flot-sales" className="fullwidth height-250" style={{padding: "0px", position: "relative"}}>
                    <canvas className="flot-base" width="733" height="250" style={{
                        direction: "ltr",
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        width: "733px",
                        height: "250px"
                    }}></canvas>
                </div>
            </div>
        )
    }
}
export default Body_contents;