import { useState ,useEffect} from "react"

export default function Counter(){
    let [countx,setCountx] =useState(0);
    let [county,setCounty] =useState(0);

    let incCountx = () => {
        return (
          setCountx(currcount => currcount+1)
        )
    }
    let incCounty = () => {
        return (
          setCounty(currcount => currcount+1)
        )
    }

    useEffect(function sideEffect(){
        console.log("this is side effect");
    },[countx]);
    return(
        <div>
            <h3>Counter</h3>
            <p>count =  {countx}</p>
            <button onClick={incCountx}>Increase</button>
            <h3>Counter</h3>
            <p>count =  {county}</p>
            <button onClick={incCounty}>Increase</button>
        </div>
    )
}