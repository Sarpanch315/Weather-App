import { useState ,useEffect} from "react";

export default function Joker(){
    
    let [joke,setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const getNewJokes = async() =>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup : jsonResponse.setup,punchline : jsonResponse.punchline})
    };

    useEffect(() => {async function getFirstJokes(){
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup : jsonResponse.setup,punchline : jsonResponse.punchline});}
        getFirstJokes();
    },[]);
    return(
        <div>
            <h1>Random Jokes</h1>
            <h2>{joke.setup} </h2>
            <h2>{joke.punchline} </h2>
            <button onClick={getNewJokes}> New Joke</button>
        </div>
    )
}