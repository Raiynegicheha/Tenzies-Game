import React from "react";
import "./App.css"


export default function Die(props){
    return (
        <div className={props.isHeld? "die-face hold" : "die-face"} onClick={props.holdDice}>
            <h2 className="tenzie">{props.value}</h2>

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