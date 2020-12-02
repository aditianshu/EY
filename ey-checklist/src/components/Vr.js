import React, { Component } from 'react'
import { Entity, Scene } from 'aframe-react'
import skyTexture from '../img/city.jpg'
import 'aframe'

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
                    <Entity primitive ="a-text" 
                        font="kelsonsans" 
                        value="Welcome to EY!" 
                        width="15" 
                        position="3.5 2.5 -5.5"
                        rotation="0 0 0"></Entity>
                </Scene>
            </div>
        )
    }
}

export default Vr;


// <a-entity id="startButtonLabel" mixin="font" text="value: BEGIN; color: #f0f0f0; align: center; width: 1; wrapCount: 12; opacity: 0" position="0 -0.1 0.01" animation="property: components.text.material.uniforms.opacity.value; from: 0; to: 1; dur: 500; delay: 3500"></a-entity>