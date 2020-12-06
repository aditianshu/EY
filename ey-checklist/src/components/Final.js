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
                        

                        
                        <Entity rotation="0 145 0">
                            <Entity primitive ="a-camera" position="0 0 0" ></Entity>
                        </Entity>
                        
                    </Scene>
                </div>
            </div>
        )
    }
}

export default Final;