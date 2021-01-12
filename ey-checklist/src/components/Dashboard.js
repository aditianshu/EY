import React, { Component } from 'react'
import { Entity, Scene } from 'aframe-react'
import skyTexture from '../img/dash.jpg'
import rules from '../img/rules.png'
import t1 from '../img/1.png'
import t2 from '../img/2.png'
import t3 from '../img/3.png'
import t4 from '../img/4.png'
import shop from '../img/shop.png'
import quiz from '../img/quiz.png'
import check from '../img/check.png'
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
  } from 'react-router-dom';
import 'aframe'
import 'aframe-href-component'
import {db, fs} from '../fire'
import 'firebase/firestore'
import 'firebase';
import '../links.json'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskId : this.props.match.params.taskID
        }
    }

    
    async componentDidMount(){
        const taskListRef = fs.collection('sequences').doc(`${this.props.match.params.taskID}`)
        const doc = await taskListRef.get();
        if (!doc.exists) {
        console.log('No such document!');
        } else {
        console.log('Document data:', doc.data());
        }
        const dataxyz = doc.data()
        console.log(dataxyz)
        this.setState({
            ...this.state,
            taskLists : dataxyz
        })
        console.log(this.state)
    }

    render(){
        console.log(this.state)
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
                        height="1" width="1"
                        rotation="0 30 0"
                        position ="-3 2 -2.5"
                        href="/task_1"
                        ></Entity>

                        <Entity primitive ="a-image"
                        src = {t2}
                        height="1" width="1"
                        rotation="0 32 0"
                        position ="-2 1.9 -2.5"
                        href="/task_2"
                        ></Entity>


                        <Entity primitive ="a-image"
                        src = {t3}
                        height="1" width="1"
                        rotation="0 35 0"
                        position ="-1.2 1.84 -2.5"
                        href="/task_3"
                        ></Entity>

                        <Entity primitive ="a-image"
                        src = {t4}
                        height="1" width="1"
                        rotation="0 32 0"
                        position ="-2 1.3 -2.5"
                        href="/task_4"
                        ></Entity>

                        <Entity primitive ="a-image"
                        src = {quiz}
                        height="1" width="1"
                        rotation="0 30 0"
                        position ="-2.7 0.8 -2.3"
                        href="/quiz"
                        ></Entity>

                        <Entity primitive ="a-image"
                        src = {shop}
                        height="1" width="1"
                        rotation="0 35 0"
                        position ="-1.2 1 -2.5"
                        href="/shop"
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