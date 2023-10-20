import React from "react";
import Die from "./Die";
import "./App.css"
import { nanoid } from 'nanoid'


export default function App(){

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(()=>{
        
        const value = dice[0].value

        dice.map(oldDice => {oldDice.map(die => {
            if(value === die.value){
                setTenzies(true)
            }
        })})
    },[dice])

    function allNewDice(){
        const newDice = []
        for(let i = 0; i < 10; i++){
         newDice.push({
           value: Math.ceil(Math.random()*6),
           isHeld: false,
           id: nanoid()
        })
        }
        return newDice
           
     }

    function rollDice(){
        setDice(dice.map(die=>{
            if(die.isHeld === false){
                return {...die, 
                    value:Math.ceil(Math.random()*6),
                    id: nanoid()
                }
            } else {
                return die
            }
        }))
     }
    
    function holdDice(id){
        const newDice = dice.map(die =>{
            if(die.id === id){
               return {...die, isHeld: !die.isHeld}
            } else {
                return die
            }
          
        })
        setDice(newDice)
    }
    // function endGame(){
    //    for(let i = 0; i < dice.length; i++){
    //     if(dice[0].value === dice[i].value && dice[i].isHeld === true){
    //         setTenzies(true)
    //     }
    //    }
    // }

    const diceElements = dice.map(die =>{
        return <Die 
        key = {die.id} 
        value={die.value} 
        isHeld = {die.isHeld} 
        holdDice = {()=> holdDice(die.id)}
        />
    })
     

  
  return (
    <main>
      
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same.<br/>
        Click each die to freeze it at its current value between rolls.</p> 

        <div className="tenzie-box">
        {diceElements}
        </div>

        <button 
            className={tenzies?"roll-btn won":"roll-btn"} 
            onClick={rollDice}>
                {tenzies?"End Game":"Roll"}
        </button>

    </main>
  )
}




















/*import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import './App.css';

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
/**
 * Challenge: Allow the user to play a new game when the
 * button is clicked and they've already won
 
    
    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}

*/
