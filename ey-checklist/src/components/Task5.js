import React, { Component } from 'react'
import { Entity, Scene } from 'aframe-react'
import 'aframe'
import show from '../img/techLandscape.png'
import yammer from '../img/yammer.png'
import hr from '../img/HR.png'
import techUsed from '../img/techUsed.png'
import buddy from '../img/buddy.png'
import skyTexture from '../img/dash.jpg'


class Task5 extends Component{
    // constructor(props){
    //     super(props);
        
    // }

    render(){

        return (
        <div className = "Task5">
            <Scene
                //background="color: #212"
                webxr="referenceSpaceType: local"
                environment
                cursor="rayOrigin: mouse; fuse: false" raycaster="objects: .raycastable"
                info-message="htmlSrc: #messageText">
                <a-assets>
                    <a-asset-item id="messageText" src="message.html"></a-asset-item>
                    
                    <img id="kazetachinu" src={yammer} crossorigin="anonymous"/>
                    <img id="kazetachinuPoster" src={yammer} crossorigin="anonymous"/>
                    
                    <img id="ponyo" src={yammer} crossorigin="anonymous"/>
                    <img id="ponyoPoster" src={yammer} crossorigin="anonymous"/>
                    
                    <img id="karigurashi" src={yammer} crossorigin="anonymous"/>
                    <img id="karigurashiPoster" src={yammer} crossorigin="anonymous"/>
                    <a-mixin
                    id="frame"
                    geometry="primitive: plane; width: 0.5783552; height: 0.8192"
                    material="color: white; shader: flat"
                    animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                    animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"
                    ></a-mixin>
                    <a-mixin
                    id="poster"
                    geometry="primitive: plane; width: 0.544768; height: 0.786432"
                    material="color: white; shader: flat"
                    //material="shader: flat"
                    position="0 0 0.005"
                    ></a-mixin>
                    <a-mixin
                    id="movieImage"
                    geometry="primitive: plane; width: 1.5; height: 0.81"
                    material="src: #ponyo; shader: flat; transparent: true"
                    position="0 0.495 0.002"
                    ></a-mixin>
                </a-assets>

                <Entity primitive = "a-sky"
                            src={skyTexture}
                            rotation="0 -130 0"
                        >
                 </Entity>
                <Entity
                    id="background"
                    position="0 0 0"
                    geometry="primitive: sphere; radius: 2.0"
                    material="color: red; side: back; shader: flat"
                    scale="0.001 0.001 0.001"
                    visible="false" class="raycastable">
                </Entity>

                <Entity
                    position="0 1.6 0"
                    camera look-controls="magicWindowTrackingEnabled: false; touchEnabled: false; mouseEnabled: false">
                    <Entity
                    id="fadeBackground"
                    geometry="primitive: sphere; radius: 2.5"
                    material="color: black; side: back; shader: flat; transparent: true; opacity: 0.6" visible="false">
                    </Entity>
                </Entity>

{/*                 
                <Entity id="leftHand" laser-controls="hand: left" raycaster="objects: .raycastable"></Entity>
                <Entity id="rightHand" laser-controls="hand: right" raycaster="objects: .raycastable" line="color: #118A7E"></Entity> */}

                <Entity id="ui" position="0 1.6 -2.5">
                    
                    <Entity id="menu" highlight>
                    <Entity id="karigurashiButton" position="-0.8 0 0" mixin="frame" class="raycastable menu-button">
                        <Entity material="src: #karigurashiPoster;" mixin="poster"></Entity>
                    </Entity>

                    <Entity id="kazetachinuButton" position="0 0 0" mixin="frame" class="raycastable menu-button">
                        <Entity material="src: #kazetachinuPoster" mixin="poster"></Entity>
                    </Entity>

                    <Entity id="ponyoButton" position="0.8 0 0" mixin="frame" class="raycastable menu-button">
                        <Entity material="src: #ponyoPoster" mixin="poster"></Entity>
                    </Entity>
                    </Entity>

                    
                    <Entity
                    id="infoPanel"
                    position="0 0 0.5"
                    info-panel
                    visible="false"
                    scale="0.001 0.001 0.001"
                    geometry="primitive: plane; width: 1.5; height: 1.8"
                    material="color: #333333; shader: flat; transparent: false" class="raycastable">
                    <Entity id="ponyoMovieImage" mixin="movieImage" material="src: #ponyo" visible="false"></Entity>
                    <Entity id="kazetachinuMovieImage" mixin="movieImage" material="src: #kazetachinu" visible="false"></Entity>
                    <Entity id="karigurashiMovieImage" mixin="movieImage" material="src: #karigurashi" visible="false"></Entity>
                    <Entity id="movieTitle"
                        position="-0.68 -0.1 0"
                        text="shader: msdf; anchor: left; width: 1.5;  color: white; value: Ponyo (2003)"></Entity>
                    <Entity id="movieDescription"
                        position="-0.68 -0.2 0"
                        text="baseline: top; shader: msdf; anchor: left;  color: white; value: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Entity>
                    </Entity>
                </Entity>
            </Scene> 
        </div>
        )
    }
}

export default Task5;











// <a-scene
//       background="color: #212"
//       webxr="referenceSpaceType: local"
//       environment
//       cursor="rayOrigin: mouse; fuse: false" raycaster="objects: .raycastable"
//       info-message="htmlSrc: #messageText">
//       <a-assets>
//         <a-asset-item id="messageText" src="message.html"></a-asset-item>
//         <!--
//           Image source: http://www.ghibli.jp/works/kazetachinu/#frame&gid=1&pid=1
//           Image author: Studio Ghibli
//         -->
//         <img id="kazetachinu" src="https://cdn.aframe.io/examples/ui/kazetachinu.jpg" crossorigin="anonymous"/>
//         <img id="kazetachinuPoster" src="https://cdn.aframe.io/examples/ui/kazetachinuPoster.jpg" crossorigin="anonymous"/>
//         <!--
//           Image source: http://www.ghibli.jp/works/ponyo/#frame&gid=1&pid=36
//           Image author: Studio Ghibli
//         -->
//         <img id="ponyo" src="https://cdn.aframe.io/examples/ui/ponyo.jpg" crossorigin="anonymous"/>
//         <img id="ponyoPoster" src="https://cdn.aframe.io/examples/ui/ponyoPoster.jpg" crossorigin="anonymous"/>
//         <!--
//           Image source: http://www.ghibli.jp/works/karigurashi/#frame&gid=1&pid=32
//           Image author: Studio Ghibli
//         -->
//         <img id="karigurashi" src="https://cdn.aframe.io/examples/ui/karigurashi.jpg" crossorigin="anonymous"/>
//         <img id="karigurashiPoster" src="https://cdn.aframe.io/examples/ui/karigurashiPoster.jpg" crossorigin="anonymous"/>
//         <a-mixin
//           id="frame"
//           geometry="primitive: plane; width: 0.5783552; height: 0.8192"
//           material="color: white; shader: flat"
//           animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
//           animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"
//          ></a-mixin>
//          <a-mixin
//           id="poster"
//           geometry="primitive: plane; width: 0.544768; height: 0.786432"
//           material="color: white; shader: flat"
//           material="shader: flat"
//           position="0 0 0.005"
//          ></a-mixin>
//          <a-mixin
//           id="movieImage"
//           geometry="primitive: plane; width: 1.5; height: 0.81"
//           material="src: #ponyo; shader: flat; transparent: true"
//           position="0 0.495 0.002"
//          ></a-mixin>
//       </a-assets>

//       <a-entity
//         id="background"
//         position="0 0 0"
//         geometry="primitive: sphere; radius: 2.0"
//         material="color: red; side: back; shader: flat"
//         scale="0.001 0.001 0.001"
//         visible="false" class="raycastable">
//       </a-entity>

//       <a-entity
//         position="0 1.6 0"
//         camera look-controls="magicWindowTrackingEnabled: false; touchEnabled: false; mouseEnabled: false">
//         <a-entity
//           id="fadeBackground"
//           geometry="primitive: sphere; radius: 2.5"
//           material="color: black; side: back; shader: flat; transparent: true; opacity: 0.6" visible="false">
//         </a-entity>
//       </a-entity>

//       <!-- Hand controls -->
//       <a-entity id="leftHand" laser-controls="hand: left" raycaster="objects: .raycastable"></a-entity>
//       <a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: .raycastable" line="color: #118A7E"></a-entity>

//       <a-entity id="ui" position="0 1.6 -2.5">
//         <!-- Poster menu -->
//         <a-entity id="menu" highlight>
//           <a-entity id="karigurashiButton" position="-0.8 0 0" mixin="frame" class="raycastable menu-button">
//             <a-entity material="src: #karigurashiPoster;" mixin="poster"></a-entity>
//           </a-entity>

//           <a-entity id="kazetachinuButton" position="0 0 0" mixin="frame" class="raycastable menu-button">
//             <a-entity material="src: #kazetachinuPoster" mixin="poster"></a-entity>
//           </a-entity>

//           <a-entity id="ponyoButton" position="0.8 0 0" mixin="frame" class="raycastable menu-button">
//             <a-entity material="src: #ponyoPoster" mixin="poster"></a-entity>
//           </a-entity>
//         </a-entity>

//         <!-- Info panel of the selected movie. -->
//         <a-entity
//           id="infoPanel"
//           position="0 0 0.5"
//           info-panel
//           visible="false"
//           scale="0.001 0.001 0.001"
//           geometry="primitive: plane; width: 1.5; height: 1.8"
//           material="color: #333333; shader: flat; transparent: false" class="raycastable">
//           <a-entity id="ponyoMovieImage" mixin="movieImage" material="src: #ponyo" visible="false"></a-entity>
//           <a-entity id="kazetachinuMovieImage" mixin="movieImage" material="src: #kazetachinu" visible="false"></a-entity>
//           <a-entity id="karigurashiMovieImage" mixin="movieImage" material="src: #karigurashi" visible="false"></a-entity>
//           <a-entity id="movieTitle"
//             position="-0.68 -0.1 0"
//             text="shader: msdf; anchor: left; width: 1.5; font: https://cdn.aframe.io/examples/ui/Viga-Regular.json; color: white; value: Ponyo (2003)"></a-entity>
//           <a-entity id="movieDescription"
//             position="-0.68 -0.2 0"
//             text="baseline: top; shader: msdf; anchor: left; font: https://cdn.aframe.io/examples/ui/Viga-Regular.json; color: white; value: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></a-entity>
//         </a-entity>
//       </a-entity>
//     </a-scene> 