import React, {useState, useEffect} from 'react';

export default function IntervalCount(){
    const [time, setTime] = useState(new Date.toLocaleTimeString())
    
    const [showTime, setShowTime] = useState(false)

    useEffect(function(){

        //Part one --> What you want to do
        if(showTime === false){
            return
        }
        console.log("In use effect")
        const setInt = setInterval(()=>{
           setTime();
        },1000)
 
        //Part 2 --> Only if you need clean up
        return ()=> {
            console.log("Clean up")
            clearInterval(setInt)
        }

    },[showTime])

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={()=>setShowTime(!showTime)}>Show Time</button>
        </div>
    )
}
