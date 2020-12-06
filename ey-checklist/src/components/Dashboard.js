import React, { Component } from 'react'
import { Entity, Scene } from 'aframe-react'
import skyTexture from '../img/dash.jpg'
import coin from '../img/coin.png'
import avatar from '../img/avatar.png'
import rules from '../img/rules.png'
import t2 from '../img/1.png'
import t1 from '../img/2.png'
import check from '../img/check.png'
import logo from '../img/logo.png'
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
  } from 'react-router-dom';
import 'aframe'
import 'aframe-href-component'

class Dashboard extends Component{


    render(){

        return (

            <div className = 'Dashboard'>
                <div>
                    <Scene>
                        <Entity primitive = "a-sky"
                            src={skyTexture}
                            rotation="0 -130 0"
                        >
                        </Entity>

                        {/* <Entity primitive = "a-image"
                        src = {avatar}
                        height="1.5" width="3"
                        rotation="0 0 0"
                        position ="-4 3 -3"></Entity> */}

                        <Entity primitive = "a-image"
                        src = {rules}
                        height="4" width="7"
                        rotation="0 -30 0"
                        position ="3 1 -5"></Entity>

                        <Entity primitive = "a-text"
                        font="mozillavr" 
                        value ="Your Tasks"
                        width ="5"
                        position="-3 2.7 -3"
                        rotation ="0 30 0"
                        animation__mouseenter="property: width; to: 5.5; startEvents: mouseenter; dur: 200"
                        animation__mouseleave="property: width; to: 3; startEvents: mouseleave; dur: 200"
                        href ="/login"
                        ></Entity>

                        <Entity primitive ="a-image"
                        src = {t1}
                        height="1" width="2"
                        rotation="0 30 0"
                        position ="-3 2 -2.5"
                        href="/tasks"
                        ></Entity>

                        <Entity primitive ="a-image"
                        src = {t2}
                        height="1" width="2"
                        rotation="0 32 0"
                        position ="-2 1.9 -2.5"
                        href="/final"
                        ></Entity>

                        <Entity primitive ="a-image"
                        src = {check}
                        height="1" width="2"
                        rotation="0 35 0"
                        position ="-1.2 1.84 -2.5"
                        href="/task_2"
                        ></Entity>

                        <Entity primitive ="a-camera"
                        cursor="rayOrigin: mouse"
                        >
                        </Entity>

                    </Scene>
                </div>
            </div>
        )
    }
}

export default Dashboard;