import React, {useState, useEffect} from 'react';

export default function IntervalCount(){
    const [count, setCount] = useState(0)
    const [startCount, setStartCount] = useState(false)
    const [startCountDown, setStartCountDown] = useState(false)

    useEffect(function(){

        //Part one --> What you want to do
        if(startCount === false){
            return
        }
        console.log("In use effect")
        const setInt = setInterval(()=>{
           setCount(count=>count+1);
        },500)
 
        //Part 2 --> Only if you need clean up
        return ()=> {
            console.log("Clenan up")
            clearInterval(setInt)
        }

    },[startCount])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setStartCount(!startCount)}>Start Count</button>
            <button onClick={()=>setStartCountDown(!setStartCount)}>Start Count Down</button>
        </div>
    )
}
