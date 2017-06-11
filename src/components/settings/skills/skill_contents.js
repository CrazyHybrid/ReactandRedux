/**
 * Created by ForYouForever on 4/18/2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Skill_body extends React.Component {

    save_skills(e){

        e.preventDefault();

        const skill_name = this.refs.skill_name.value;
        const skill_desc = this.refs.skill_desc.value;

        axios.post('/api/save_skill', {
            skill_name: skill_name,
            skill_desc: skill_desc
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.refs.skillForm.reset();
    }

    componentDidMount(){

    }


    render() {

        return (
            <div className="panel-body">
                <div id="flot-sales" className="fullwidth " style={{padding: "20px 40px", position: "relative"}}>
                        <div  style={{margin:"0 auto",width:"80%"}} >
                            <form ref="skillForm" onSubmit={this.save_skills.bind(this)}>
                                <div className="col-md-8">
                                        <div className="col-md-6" >
                                            <label>NAME </label> <input  ref="skill_name" className="form-control" placeholder="Skill name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Description  </label><textarea ref="skill_desc" className="form-control" style={{height:"100px"}}></textarea>
                                        </div>
                                </div><br/>

                                <div className="col-md-2" style={{textAlign:"center"}}>
                                    <div className="col-md-2">
                                            <input className="btn btn-success" type="submit" value="SUBMIT" style={{marginBottom:"5px",width:"100px"}} />
                                            <input  className="btn btn-danger"  type="reset" value="CANCEL" style={{width:"100px"}} />
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Skill_body;