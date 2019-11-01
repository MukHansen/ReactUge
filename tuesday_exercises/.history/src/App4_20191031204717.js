import React, {useState, useEffect} from 'react';

export default function IntervalCount(){
    const [time, setTime] = useState("")
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
            const newTime = [hour, min, sec];
           setTime(newTime.join(":"));
           console.log(newTime);
           console.log(hour);
           console.log(min);
           console.log(sec);
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
