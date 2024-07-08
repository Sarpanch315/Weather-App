import { useState } from "react"
export default function LudoBoard(){
    let [moves,setMoves] = useState({blue : 0,yellow : 0,green : 0,red : 0});
    let [arr,setArr] = useState(["empty array"]);
    let updateArr = () => {
        
        setArr((prevArr) => {
            return (
                [...prevArr,"array updated"]
            )
        });
    }
    
    let updateBlue = () =>{
        setMoves((prevVal) => {
            return (
                {...prevVal,blue : prevVal.blue +1}
            )
        });
    }

    let updateGreen = () =>{
        setMoves((prevVal) => {
            return (
                {...prevVal,green : prevVal.green +1}
            )
        });
    }

    let updateRed = () =>{
        setMoves((prevVal) => {
            return (
                {...prevVal,red : prevVal.red +1}
            )
        });
    }

    let updateYellow = () =>{
        setMoves((prevVal) => {
            return (
                {...prevVal,yellow : prevVal.yellow +1}
            )
        });
    }
    let style = {
        border: '2px solid black',
        padding : '20px',
        borderRadius : '16px'
    };
    return(
        <div style={style} onClick={updateArr}>
            <p>Game begin</p>
            <p>{arr}</p>
            <div className="board" >
                <p>Blue moves = {moves.blue} </p>
                <button style= {{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow} </p>
                <button style= {{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green} </p>
                <button style= {{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red} </p>
                <button style= {{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}