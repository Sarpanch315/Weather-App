import { useState } from "react"
import "./App.css"
import Ticket from "./Ticket.jsx";
import { genTicket , sum } from "./helper";
export default function Fronted(n = 3,winningSum = 15) {
    let [Ticket,setTicket] = useState(genTicket(n));
    let isWinning = sum(Ticket) === winningSum;
    let buyTicket = () => {
        setTicket(genTicket(n))
    }
    return (
        <div>
            <h1>Lottery </h1>
            <Ticket ticket = {Ticket}/>
            <br />
            <button onClick={buyTicket}>Get New Ticket</button>
            <br />
            <h3>{isWinning && "Congratulation!! You Won"} </h3>
        </div>
    )
} 