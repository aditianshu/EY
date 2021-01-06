import React, { Component } from 'react'
import Form from "@rjsf/core";
import { Entity, Scene } from 'aframe-react'
import 'aframe'
import back from "../img/stairs.jpg"
import show from '../img/techLandscape.png'


class Task4 extends Component{
    // constructor(props){
    //     super(props);
        
    // }

    render(){

        return (
        <div className = "Task4">
            <Scene>
                <Entity primitive="a-sky"
                            src ={back}
                            rotation="0 -90 0">
                </Entity>
                <Entity primitive="a-image"
                    src={show}
                    position="-1 3 -10" 
                    rotation="0 5 0"
                    //scale="4 2 0"
                    height="10" width="10"
                    >
                </Entity>
                <Entity primitive = "a-text"
                    font="mozillavr" 
                    value ="Start >>"
                    width ="13"
                    position="-1 2.5 -10"
                    rotation ="0 0 0"
                    animation__mouseenter="property: width; to: 15.5; startEvents: mouseenter; dur: 200"
                    animation__mouseleave="property: width; to: 13; startEvents: mouseleave; dur: 200"
                    
                >
                </Entity>
                <Entity primitive ="a-camera"
                        cursor="rayOrigin: mouse"
                    >
                </Entity>
            </Scene>
        </div>
        )
    }
}

export default Task4;