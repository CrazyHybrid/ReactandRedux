/**
 * Created by ForYouForever on 4/18/2017.
 */
    import React from "react";
    import ReactDOM from 'react-dom';
    import {Link} from "react-router-dom";
    import  items from "./sidebar_items"


    class Item_child extends React.Component{

        render(){
            return(
                <li><Link  to={this.props.url}>{this. props.title}</Link></li>
            )
        }
    }

    class Item extends React.Component{

        constructor(props, context){
            super(props,context);
        }

        toggleExpand(){
            this.props.prerender(this.props.index);
        }

        render(){

            var className =  this.props.who==this.props.index ? "el_primary menu-open" : "el_primary";

            return(
                <li className={className } id="el_2" onClick={this.toggleExpand.bind(this)}>
                    <a href="#" >
                        <i className="fa fa-menu-arrow pull-right"></i>
                        <i className={this.props.icons}></i> <span>{this.props.parent_label}</span>
                    </a>
                    <ul >
                        {this.props.child_items.map((item,i) => <Item_child key={i} index={i} url={item.url} title={item.child_label}/>)}
                    </ul>
                </li>
            )
        }
    }


    class Sidebar extends React.Component {

        constructor(props,context){
            super(props,context);

            this.state ={
                who:null
            }
        }
        reRenders(index){
            this.setState({
                who:index
            })
            this.render.bind(this);
        }

        componentWillReceiveProps(nextProps){
            console.log("componentWillReceiveProps : "+nextProps);
        }
        shouldComponentUpdate(nextProps, nextState){
            console.log("shouldComponentUpdate : "+nextProps,nextState);
            return true;
        }
        render(){


            return(


                    <aside id="aside" style={{paddingTop:"56px",overflow:"scroll"}}>

                        <nav id="sideNav">
                            <ul className="nav nav-list">
                                {items.map((item,i) => <Item child_items={item.child} parent_label ={item.label} icons={item.icon}  key={i} index={i} who={this.state.who}  prerender={this.reRenders.bind(this)} />)}
                            </ul>
                        </nav>
                        <span id="asidebg"></span>

                    </aside>


            )
        }
    }
    export default Sidebar;
