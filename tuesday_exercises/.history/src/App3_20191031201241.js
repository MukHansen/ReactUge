import React, {useState, useEffect} from 'react';

export default function IntervalCount(){
    const [count, setCount] = useState(0)
    const [startCountDown, setStartCountDown] = useState(false)
    const [startCountByInput, setStartCountByInput] = useState(false)

    useEffect(function(){

        //Part one --> What you want to do
        if(startCountDown === false){
            return
        }
        console.log("In use effect")
        console.log(document.getElementById("countBy").value);
        const setInt = setInterval(()=>{
           setCount(count=>count-1);
        },500)
 
        //Part 2 --> Only if you need clean up
        return ()=> {
            console.log("Clean up")
            clearInterval(setInt)
        }

    },[startCountDown])

    useEffect(function(){
        //Part one --> What you want to do
        if(startCountByInput === false){
            return
        }

        console.log("In use effect")
        console.log(document.getElementById("countBy").value);
        const setInt = setInterval(()=>{
            const value = document.getElementById("countBy").value;
           setCount(count=>count + value);
        },500)
 
        //Part 2 --> Only if you need clean up
        return ()=> {
            console.log("Clean up")
            clearInterval(setInt)
        }

    },[startCountByInput])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setStartCountDown(!startCountDown)}>Start Counting Down</button>
            <form onClick={()=>setStartCountByInput(!startCountByInput)}>
            <input type="number" id="countBy"></input>
            <button>Start Count By Input Value</button>
            </form>
        </div>
    )
}
