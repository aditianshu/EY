import React, { Component } from 'react'
import back from "../img/dash.jpg"
import { Entity, Scene } from 'aframe-react'
import 'aframe'
import tee from '../img/tee.png'
import mug from '../img/mug.png'
import hoodie from '../img/Hoodie.png'
import 'aframe-href-component'

class Shop extends Component{


    render(){

        return (

            <div className = 'Shop'>
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
                        value ="Your coin count is : 55$"
                        width ="3"
                        position="-4.5 2 -3"
                        rotation ="0 1 0"
                        animation__mouseenter="property: width; to: 5.5; startEvents: mouseenter; dur: 200"
                        animation__mouseleave="property: width; to: 3; startEvents: mouseleave; dur: 200"
//                        animation="property: position; to: 0 2.55 -4; loop: true; dur: 1000"
                        >
                           
                        </Entity>

                        <Entity primitive ="a-image"
                        src={tee}
                        width ="2" height ="2"
                        position="-3 0.2 -3"
                        rotation ="0 1 0"
                        >
                           
                        </Entity>

                        <Entity primitive ="a-image"
                        src={mug}
                        width ="2" height ="2"
                        position="0 0.2 -3"
                        rotation ="0 1 0"
                        >
                           
                        </Entity>

                        <Entity primitive ="a-image"
                        src={hoodie}
                        width ="2" height ="2"
                        position="3 0.2 -3"
                        rotation ="0 1 0"
                        >
                           
                        </Entity>

                        <Entity primitive = "a-text"
                            font="mozillavr" 
                            value ="Next >>"
                            width ="3"
                            position="4 -1 -3"
                            rotation ="0 1 0"
                            href="/final"></Entity>
                        
                        <Entity primitive ="a-camera" position="0 0 0" cursor="rayOrigin: mouse"></Entity>
                        
                    </Scene>
                </div>
            </div>
        )
    }
}

export default Shop;