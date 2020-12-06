import React, { Component } from 'react'
import { Entity, Scene } from 'aframe-react'
import skyTexture from '../img/city.jpg'
import logo from '../img/logo.png'
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
  } from 'react-router-dom';
import 'aframe'
import 'aframe-href-component'

const COLORS = ['#D92B6A', '#9564F2', '#FFCF59']

class Vr extends Component{
    constructor() {
        super()
        this.state = { color: 'red' }
      }
    
      changeColor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue']
        this.setState({
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    


    render(){
        return (
            <div className = "Vr">
                <Scene>
                    <a-assets>
                        <img src ={skyTexture} id = "sky"/>
                    </a-assets>
                    <Entity
                        primitive = "a-sky"
                        src={skyTexture}
                        rotation="0 -130 0"
                    >
                    </Entity>
                    {/* <Entity primitive ="a-text" 
                        font="kelsonsans" 
                        value="Welcome to EY!" 
                        width="15" 
                        position="3.5 2.5 -5.5"
                        rotation="0 0 0"></Entity> */}
                    <Entity primitive = "a-image"
                        src = {logo}
                        height="4" width="4"
                        rotation="0 0 0"
                        position ="0 3 -3"></Entity>
                    {/* <Entity primitive ="a-text"
                        font="kelsonsans" 
                        value ="Start ->"
                        width ="5"
                        position="-4.4 3 -2.9"
                        animation="property: position; to: -4.4 3.05 -2.9; loop: true; dur: 1000"
                        rotation ="0 0 0">
                    </Entity> */}
                    <Entity primitive ="a-text"
                        font="mozillavr" 
                        value ="LOGIN  >>"
                        width ="3"
                        position="-0.3 1.8 -3"
                        rotation ="0 0 0"
                        animation__mouseenter="property: width; to: 5.5; startEvents: mouseenter; dur: 200"
                        animation__mouseleave="property: width; to: 3; startEvents: mouseleave; dur: 200"
                        href ="/login"
//                        animation="property: position; to: 0 2.55 -4; loop: true; dur: 1000"
                        >
                            <Link to="/login"></Link>
                    </Entity>
                    <Entity primitive ="a-camera"
                        cursor="rayOrigin: mouse"
                    >

                        {/* <Entity primitive="a-cursor" 
                            position="0 0 -1"
                            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                            material="color: black; shader: flat">

                        </Entity> */}
                    </Entity>
                    
                </Scene>
            </div>
        )
    }
}

export default Vr;


// <a-entity id="startButtonLabel" mixin="font" text="value: BEGIN; color: #f0f0f0; align: center; width: 1; wrapCount: 12; opacity: 0" position="0 -0.1 0.01" animation="property: components.text.material.uniforms.opacity.value; from: 0; to: 1; dur: 500; delay: 3500"></a-entity>