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
        const handleSubmit = (ev) => {
            const target = ev.target;
            const value = target.value;
            console.log(value);
            return value;
          }

        console.log("In use effect")
        const setInt = setInterval(()=>{
           setCount(count=>count + {handleSubmit});
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
            <form>
            <input type="number"></input>
            <button onClick={()=>setStartCountByInput(!setStartCountByInput)}>Start Count By Input Value</button>
            </form>
        </div>
    )
}
