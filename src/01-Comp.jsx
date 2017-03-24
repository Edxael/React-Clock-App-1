import React, { Component } from 'react';
import './style.css';


    // Main Component that will be Exported to "Index.js"
class Comp_01 extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <p className="title">The Clock Application</p>
                    <Clock/>
                </div>
                <p>by: Edmundo Rubio</p>
            </div>
        )
    }
}

export default Comp_01;


    // Secondary Component this is the Clock
class Clock extends Component{


    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }


    render(){
        return(
            <div>

                <h2>Local time: {this.state.date.toLocaleTimeString()}</h2>

            </div>
        )
    }


        // Mounting and Unmounting
    componentDidMount(){
        this.timeID = setInterval( () => {this.tick()}, 1000 );
    }
    componentWillUnMount(){
        clearInterval(this.timeID);
    }

        // This is the function that will requeste the new hour, and is call when Mointing.
    tick() {
        this.setState({ date: new Date() });
    }

}
