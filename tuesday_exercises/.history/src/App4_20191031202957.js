import React, {useState, useEffect} from 'react';

export default function IntervalCount(){
    const [count, setCount] = useState(0)
    const [startClock, setStartCount] = useState(false)

    useEffect(function(){

        //Part one --> What you want to do
        if(startClock === false){
            return
        }
        console.log("In use effect")
        const setInt = setInterval(()=>{
           setCount(count=>count+1);
        },500)
 
        //Part 2 --> Only if yo need clean up
        return ()=> {
            console.log("Clenan up")
            clearInterval(setInt)
        }

    },[startClock])

    return (
        <div>
            <h1>{date.toLocaleTimesString()}</h1>
            <button onClick={()=>setStartCount(!startClock)}>Start Count</button>
        </div>
    )
}
