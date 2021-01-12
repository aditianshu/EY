import React, { Component } from 'react'
import Form from "@rjsf/core";
import { Entity, Scene } from 'aframe-react'
import 'aframe'
import back from "../img/stairs.jpg"
import show from '../img/techLandscape.png'
import yammer from '../img/yammer.png'
import hr from '../img/HR.png'
import techUsed from '../img/techUsed.png'
import buddy from '../img/buddy.png'


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
                    position="-0.1 3 -10" 
                    rotation="0 1 0"
                    //scale="4 2 0"
                    height="10" width="10"
                    >
                </Entity>
                {/* <Entity primitive = "a-text"
                    font="mozillavr" 
                    value ="Start >>"
                    width ="13"
                    position="-1 2.5 -10"
                    rotation ="0 0 0"
                    animation__mouseenter="property: width; to: 15.5; startEvents: mouseenter; dur: 200"
                    animation__mouseleave="property: width; to: 13; startEvents: mouseleave; dur: 200"
                    
                > 
                </Entity> */}
                <Entity primitive ="a-camera"
                        cursor="rayOrigin: mouse"
                    >
                </Entity>
                <Entity primitive = "a-image"
                    src={buddy}
                    position="-12 5 -10" 
                    rotation="0 2 0"
                    //scale="4 2 0"
                    height="5" width="5"
                ></Entity>
                <Entity primitive = "a-image"
                    src={yammer}
                    position="-9.5 -1 -10" 
                    rotation="0 2 0"
                    //scale="4 2 0"
                    height="5" width="5"
                ></Entity>
                <Entity primitive = "a-image"
                    src={hr}
                    position="9 -1 -10" 
                    rotation="0 2 0"
                    //scale="4 2 0"
                    height="5" width="5"
                ></Entity>
                <Entity primitive = "a-image"
                    src={techUsed}
                    position="12 5 -10" 
                    rotation="0 2 0"
                    //scale="4 2 0"
                    height="5" width="5"
                ></Entity>
            </Scene>
        </div>
        )
    }
}

export default Task4;