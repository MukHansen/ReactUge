import React ,{ useState, useEffect } from 'react';

export default function Norris(){
    const [norrisJoke, setNorrisJoke] = useState({value: ""});

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
            <button onClick={}></button>
        </div>
    )
}