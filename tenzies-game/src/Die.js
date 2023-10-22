import React from "react";
import "./App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  } from "@fortawesome/free-solid-svg-icons";




export default function Die(props){

   
    const getIcon = (value) =>{
        switch(value){
            case 1: 
                return <FontAwesomeIcon icon={faDiceOne} />;
            case 2: 
                return <FontAwesomeIcon icon={faDiceTwo} />;
            case 3: 
                return <FontAwesomeIcon icon={faDiceThree} />;
            case 4: 
                return <FontAwesomeIcon icon={faDiceFour} />;
            case 5: 
                return <FontAwesomeIcon icon={faDiceFive} />;
            case 6: 
                return <FontAwesomeIcon icon={faDiceSix} />;
        }
    }
    

    return (
        <div className={props.isHeld? "die-face hold" : "die-face"} onClick={props.holdDice}>

            <div className="tenzie">{getIcon(props.value)}</div>
            {/* <h2 className="tenzie">{props.value}</h2> */}

        </div>
            
    )
}






/*import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}
*/