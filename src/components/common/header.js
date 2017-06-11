/**
 * Created by ForYouForever on 4/18/2017.
 */
import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {

    render(){
        return(
            <div className="panel-heading">

                <h3>{this.props.title}</h3>

            </div>
        )
    }
}

export default Header;