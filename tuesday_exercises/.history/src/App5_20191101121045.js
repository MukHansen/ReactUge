import React ,{ useState, useEffect } from 'react';

export default function NorrisJoke(){
    const [norrisJoke, setNorrisJoke] = useState({value: ""});
    const [norrisSelector, setNorrisSelector] = useState(false);
    const [dadJoke, setDadJoke] = useState("");

    useEffect(() => {
        function fetchNorris(){
            fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(joke => {setNorrisJoke(joke);
            })
            .catch(err => console.log("OoopS! Chuck Norris Is Comming"))
        }
    })
    return (
        <div>
            <p>{norrisJoke.value}</p>
            <button onClick={()=> setNorrisJoke(!norrisJoke)}></button>
        </div>
    )
}