import React, {useState, useEffect} from 'react';

export default function IntervalCount(){
    const [count, setCount] = useState(Date.toLocaleTimesString())
    const [startClock, setStartCount] = useState(false)

    useEffect(function(){

        //Part one --> What you want to do
        if(startClock === false){
            return
        }
        console.log("In use effect")
        const setInt = setInterval(()=>{
           setCount(count=>count+1);
        },1000)
 
        //Part 2 --> Only if yo need clean up
        return ()=> {
            console.log("Clenan up")
            clearInterval(setInt)
        }

    },[startClock])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setStartCount(!startClock)}>Start Count</button>
        </div>
    )
}
