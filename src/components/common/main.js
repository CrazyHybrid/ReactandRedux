/**
 * Created by ForYouForever on 4/18/2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./sidebar";
import Body from "./body/body";


class Main extends React.Component {

    render(){
        return (
            <div>
                <Sidebar/>
                <Body/>
            </div>
        );
    }
}

export default Main;