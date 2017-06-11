/**
 * Created by ForYouForever on 4/18/2017.
 */
    import React from "react";
    import ReactDOM from "react-dom";
    import Body_header from "./body_header";
    import Body_contents from "./body_contents";
    import Body_footer from "./body_footer";


    class  Body extends React.Component {

        render(){
            return(
                <section id="middle">
                    <div id="content" className="dashboard padding-20">
                        <div id="panel-1" className="panel panel-default">

                            <Body_header title={this.props.title}/>
                            <Body_contents/>
                            <Body_footer/>
                        </div>
                    </div>
                </section>
            )
        }
    }

    export default Body;