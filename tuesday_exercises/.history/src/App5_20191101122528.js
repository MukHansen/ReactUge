import React ,{ useState, useEffect } from 'react';

export default function NorrisJoke(){
    const [norrisJoke, setNorrisJoke] = useState({value: ""});
    const [norrisSelector, setNorrisSelector] = useState(false);
    const [dadJoke, setDadJoke] = useState("");

    useEffect(() => {
        function fetchNorris(){
            console.log("Fetching Joke");
            fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(joke => {setNorrisJoke(joke);
            })
            .catch(err => console.log("OoopS! Chuck Norris Is Comming"))
        }
        fetchNorris();
    },[norrisSelector]);

    useEffect(() => {
        function fetchNorris(){
            console.log("Fetching Joke");
            fetch("https://icanhazdadjoke.com")
            .then(res => res.json())
            .then(joke => {setNorrisJoke(joke);
            })
            .catch(err => console.log("OoopS! Chuck Norris Is Comming"))
        }
        fetchNorris();
    },[10000]);

    return (
        <div>
            <h3>
                Chuck Norris
            </h3>
            <p>{norrisJoke.value}</p>
            <button onClick={()=> setNorrisSelector(!norrisSelector)}>GET CHUCK RANDOM NORRIS JOKE</button>
        </div>
    )
}