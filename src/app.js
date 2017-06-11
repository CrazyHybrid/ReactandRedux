/**
 * Created by ForYouForever on 4/17/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Route , IndexRoute ,hashHistroy,browserHistory, Switch } from "react-router-dom";
import Main from "./components/common/main";
import Skill from "./components/settings/skills/skills";



class App extends React.Component {

    constructor(props, context){
        super(props,context);
    }


    render (){
        const PageNotFound = () => <h1>Uh oh, not found!</h1>;
        return(
            <div>
            <Router history={browserHistory}>
                <div>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/setting/skills" component={Skill} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
            </div>

            </Router>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));