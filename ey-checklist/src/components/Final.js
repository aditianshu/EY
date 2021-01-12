import React, { Component } from 'react'
import back from "../img/dash.jpg"
import { Entity, Scene } from 'aframe-react'
import 'aframe'

class Final extends Component{


    render(){

        return (

            <div className = 'Tasks'>
                <div>
                <Scene>
                        {/* <a-assets>
                            <video id="vi" autoplay loop="true" src={vid}></video>
                        </a-assets> */}

                        <Entity primitive="a-sky"
                        src ={back}
                        rotation="0 -130 0"></Entity>
                        
                        <Entity primitive ="a-text"
                        font="mozillavr" 
                        value ="Thank you for playing! "
                        width ="13"
                        position="-2 1 -3"
                        rotation ="0 1 0"
                        animation__mouseenter="property: width; to: 5.5; startEvents: mouseenter; dur: 200"
                        animation__mouseleave="property: width; to: 3; startEvents: mouseleave; dur: 200"
//                        animation="property: position; to: 0 2.55 -4; loop: true; dur: 1000"
                        >
                           
                        </Entity>

                        
                        
                        <Entity primitive ="a-camera" position="0 0 0" ></Entity>
                        
                        
                    </Scene>
                </div>
            </div>
        )
    }
}

export default Final;