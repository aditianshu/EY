import React, { Component } from 'react'
import hist from '../img/hist.png'
import welcome from '../img/welcome.png'
import team from '../img/team.png'
import team_v from '../img/team_v.png'
import { Entity, Scene } from 'aframe-react'
import 'aframe'
import 'aframe-room-component'

class Task2 extends Component{


    render(){

        return (

            <div className = 'Task2'>
                <div>
                    {/* <Scene>
                        <Entity primitive="a-sky"
                        src ={back}
                        rotation="0 -130 0"></Entity>
                        


                        <a-video src = {vid} 
                        autoplay="true" loop="true" muted="true"
                        width="50" height="35" 
                        rotation="0 145 0"
                        position="-28 10 40"></a-video>

                        <Entity rotation="0 145 0">
                            <Entity primitive ="a-camera" position="0 0 0" ></Entity>
                        </Entity>
                        
                    </Scene> */}



                    <Scene>
                        
                        <a-assets>
                            
                            <img id="testTex" src="test.png"></img>
                            
                            <a-mixin id="floorMat" material="color:#BBB"></a-mixin>
                            
                            <img crossorigin="anonymous" id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"></img>
                            <img crossorigin="anonymous" id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"></img>
                            
                        </a-assets>

                        
                        <Entity primitive ="a-camera"
                            cursor="rayOrigin: mouse"></Entity>
                        
                        
                        <a-sky height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048" segments-height="5" segments-width="8"></a-sky>
                        <a-plane src="#groundTexture" rotation="-90 0 0" position="0 -0.01 0" height="100" width="100"></a-plane>
                        
                        <Entity primitive="a-light" type="directional" intensity="0.9" position="-1 -2  2"></Entity >
                        <Entity primitive="a-light" type="directional" intensity="1.0" position=" 2  1 -1"></Entity >
                        
                        <Entity primitive="rw-room" position="-2.5 0 -2.5" width="5" length="5" height="3">
                            
                            

                            <Entity  primitive="rw-wall" material="color:#2E4053">
                                <Entity primitive="rw-doorhole" id="holeA"></Entity >
                            </Entity >

                            <Entity primitive="rw-wall" material="color:#85929E">
                            <Entity primitive="a-image"
                                src={welcome}
                                position="2.5 1.4 0" scale="4 2 0"
                                ></Entity>
                            </Entity >

                            <Entity primitive="rw-wall" material="color:#34495E ">
                                <Entity primitive ="a-text" value =">>" position ="2 3 0"></Entity>
                                <Entity primitive="rw-doorhole" id="frontInner"></Entity >
                            </Entity >

                            <Entity primitive="rw-wall" material="color:#34495E">
                                <Entity primitive="a-image"
                                src={hist}
                                position="2.5 1.4 0" scale="4 2 0"
                                ></Entity>
                            </Entity >
                            
                            <Entity primitive="rw-floor" mixin="floorMat"></Entity >
                            <Entity primitive="rw-ceiling" material="color:#000000"></Entity >
                            
                        </Entity>
                        
                        <Entity primitive="rw-doorlink" from="#holeA" to="#holeB" width="1.5" position="0.3 0 0">
                            <Entity primitive="rw-floor" mixin="floorMat"></Entity>
                            <Entity primitive="rw-ceiling" material="color:#BB6"></Entity>
                            <Entity primitive="rw-sides" material="color:#BB6"></Entity>
                        </Entity>
                        
                        <Entity primitive="rw-room" position="0 0 -2.7" >
                            
                            <Entity primitive="rw-wall" position="-2 0 0" material="color:#34495E">
                                <Entity primitive ="a-image"
                                src={team}
                                position="2.5 1.2 0" scale="4 2 0"></Entity>
                            </Entity>
                            
                            <Entity primitive="rw-wall" position=" 2 0 0" material="src:#testTex; repeat:0.5 0.5;">
                                <Entity primitive="rw-doorhole" id="holeB"></Entity>
                            </Entity>

                            <Entity primitive="rw-wall" position=" 2 0 -5" material="color:#34495E" >
                                <Entity primitive="a-text" 
                                value ="Next Task >>"
                                width ="3"
                                position="2 1 0"
                                href ="/final" 
                                className="clickable"
                                animation__mouseenter="property: width; to: 5.5; startEvents: mouseenter; dur: 200"
                                animation__mouseleave="property: width; to: 3; startEvents: mouseleave; dur: 200"
                                ></Entity>
                                {/* <rw-doorhole id="holeC"></rw-doorhole>
                                <rw-doorlink from="#holeC" to="#holeD" position="4 0 0"></rw-doorlink> */}
                            </Entity>

                            <Entity primitive="rw-wall" position="-2 0 -5" material="color:#34495E">
                                <Entity primitive="a-image"
                                src={team_v}
                                position="1.7 1.4 0" scale ="5 3 0"></Entity>
                            </Entity>
                            
                            <Entity primitive="rw-floor" mixin="floorMat"></Entity>
                            <Entity primitive="rw-ceiling" material="color:#99A"></Entity>
                            
                        </Entity>
                        
                        {/* <rw-room position="2 0 -5">
                            
                            <rw-wall position="0 0 0" material="color:#800"></rw-wall>
                            <rw-wall position="0 0 2" material="color:#800">
                            <rw-doorhole id="holeD"></rw-doorhole>
                            </rw-wall>
                            <rw-wall position="1 0 2" material="color:#800"></rw-wall>
                            <rw-wall position="1 0 0" material="color:#800"></rw-wall>
                            
                            <rw-floor mixin="floorMat"></rw-floor>
                            <rw-ceiling material="color:#99A"></rw-ceiling>
                            
                        </rw-room> */}
                        
                        <rw-room position="0 0 0" outside="true" material="color:#877">
                            
                            <rw-wall position="-3 0 -8" height="3"></rw-wall>
                            <rw-wall position=" 4 0 -8" height="3"></rw-wall>
                            <rw-wall position=" 4 0  3" height="3"></rw-wall>
                            <rw-wall position="-3 0  3" height="3">
                            <rw-doorhole id="frontOuter"></rw-doorhole>
                            <rw-doorlink from="#frontInner" to="#frontOuter" material="color:#778" position="3 0 0">
                                <rw-floor></rw-floor>
                                <rw-ceiling></rw-ceiling>
                                <rw-sides></rw-sides>
                            </rw-doorlink>
                            </rw-wall>
                            
                        </rw-room>
                        
                        
                    </Scene>

                </div>
            </div>
        )
    }
}

export default Task2;