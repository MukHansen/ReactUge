import React ,{ useState, useEffect } from 'react';

export default function NorrisJoke(){
    const [norrisJoke, setNorrisJoke] = useState({value: ""});
    const [norrisSelector, setNorrisSelector] = useState(false);

    const [dadJoke, setDadJoke] = useState("");

    useEffect(() => {
        function fetchNorris(){
            console.log("Fetching Chuck Norris Joke");
            fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(joke => {setNorrisJoke(joke);
            })
            .catch(err => console.log("OoopS! Chuck Norris Is Comming"))
        }
        fetchNorris();
    },[norrisSelector]);

    useEffect(() => {
        const clear = setInterval(() => {
            fetchDadJoke();
        }, 10000);
        function fetchDadJoke(){
            console.log("Fetching Dad Joke");
            fetch("https://icanhazdadjoke.com/",{
                    headers: {
                        // Accept: 'text/plain'
                        Accept: 'application/json'
                    }
            })
            .then(res => res.json())
            .then(joke => {setDadJoke(joke);
            })
            .catch(err => console.log("OoopS! no dad joke"))
        }
        return () => clearInterval(clear);
        console.log(dadJoke.joke);
    },[]);

    return (
        <div>
            <h3>
                Chuck Norris
            </h3>
            <p> Dad Joke -> {dadJoke.joke}</p>
            <p>{norrisJoke.value}</p>
            <button onClick={()=> setNorrisSelector(!norrisSelector)}>GET CHUCK RANDOM NORRIS JOKE</button>
        </div>
    )
}