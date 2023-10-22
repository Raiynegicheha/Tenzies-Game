import React from "react";
import Die from "./Die";
import "./App.css"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'



export default function App(){

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    const [rollCount, setRollCount] = React.useState(0)

    React.useEffect(()=>{
        const allHeld = dice.every(die => die.isHeld)
        const regulator = dice[0].value
        const sameValue = dice.every(die => die.value === regulator)
        
        if(allHeld && sameValue){
            setTenzies(true)
            console.log("You won!")
        }
    },[dice])


    function newGame(){
        setTenzies(false)
        setRollCount(0)
        setDice(allNewDice)
    }

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

        if(tenzies === false){
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
            setRollCount(prev => prev + 1)
        } else {
            setRollCount(0)
        }
        
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
        {tenzies?<Confetti/>:""}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same.<br/>
        Click each die to freeze it at its current value between rolls.</p> 

        <div className="tenzie-box">
        {diceElements}
        </div>

        <button 
            className={tenzies?"roll-btn won":"roll-btn"} 
            onClick={tenzies?newGame:rollDice}>
                {tenzies?"New Game":"Roll"}
        </button>

        <div>
            <p> RollCount {rollCount} </p>
            <p></p>
        </div>
        

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
