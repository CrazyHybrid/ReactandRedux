/**
 * Created by ForYouForever on 4/18/2017.
 */
import React from "react";
import ReactDOM from 'react-dom';
import Sidebar from "../../common/sidebar";
import  Header  from "../../common/header";
import Skill_contents from "./skill_contents";
import Footer from "../../common/footer";
import Tables from "./tables";


class  Skills extends React.Component {

    render(){
        return(
            <div>
                    <Sidebar/>

                    <section id="middle">
                        <div id="content" className="dashboard padding-20">
                            <div id="panel-1" className="panel panel-default">
                                <div className="panel-heading">
                                    <h3>{this.props.title}</h3>
                                </div>

                                <Header title="SKILLS SETTING"/>
                                <Skill_contents/>
                                <hr/>
                                {/*<Tables/>*/}
                                <Footer/>

                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}

export default Skills;
