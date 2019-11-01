import React, {useState, useEffect} from 'react';

export default function IntervalCount(){
    const [time, setCount] = useState("")
    const [showTime, setShowTime] = useState(false)

    useEffect(function(){

        //Part one --> What you want to do
        if(showTime === false){
            return
        }
        console.log("In use effect")
        const setInt = setInterval(()=>{
            const d = new Date();
            const hour = d.getHours;
            const min = d.getMinutes;
            const sec = d.getSeconds;
            newTime = [hour, min, sec];
           setCount(newTime.join":");
        },1000)
 
        //Part 2 --> Only if yo need clean up
        return ()=> {
            console.log("Clenan up")
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
