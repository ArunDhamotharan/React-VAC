import React from "react";
import  ReactDOM  from "react-dom";
import './App.css';
import styles from './demo.module.css';
import img1 from './gt.jpg';
import img2 from './V.jpg';
import img3 from './v2.jpg';
import img4 from './v3.jpg';
import video1 from './gt.mp4';
import './styles.css';

class Reactstyle extends React.Component{
    render()
    {
        const mystyle={
            
            color:"yellow",
        fontFamily:"Arial"
        };
    
    return(
        <div>
        
            <img id="img-one" src={img1}  alt="car" width="500" height="500"></img>
            <img id="img-two" src={img2}  alt="messi" width="500" height="500"></img>
            <video id="video" src={video1} width="500" height="500" autoPlay="true" controls="true"/>
            <img id="img-one" src={img3}  alt="car" width="500" height="500"></img>
            <img id="img-two" src={img4}  alt="messi" width="500" height="500"></img>
        </div>
    )
}
}
ReactDOM.render(<Reactstyle/>,document.getElementById("root"));