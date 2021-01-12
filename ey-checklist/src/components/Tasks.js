import React, { Component } from 'react'
import back from "../img/lis.jpg"
import vid from '../img/Vid.mp4'
import { Entity, Scene } from 'aframe-react'
import 'aframe'

class Tasks extends Component{


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
                        {/* <Entity  primitive="a-video" src="#vi"
                        width="50" height="35" 
                        rotation="0 145 0"
                        position="-28 10 40"
                        autoplay = "true"
                        > */}

                        <Entity primitive="a-video"
                        width="50" height="35" 
                        rotation="0 145 0"
                        position="-28 10 40"
                        src={vid}
                        autoplay loop muted="true"
                       >
                        
                        </Entity>

                        {/* <a-video src = {vid} 
                        autoplay="true" loop="true" muted="true"
                        width="50" height="35" 
                        rotation="0 145 0"
                        position="-28 10 40"></a-video> */}

                        <Entity rotation="0 145 0">
                            <Entity primitive ="a-camera" position="0 0 0" ></Entity>
                        </Entity>
                        
                    </Scene>
                </div>
            </div>
        )
    }
}

export default Tasks;