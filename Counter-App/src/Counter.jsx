import { useState } from "react";


const Counter = () =>{
    const [count,setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }
    function reset(){
        setCount(0)
    }
    function decrement(){
        setCount(count - 1)
    }

    return(
        <div id="countContainer">
        <h1 id="countHeader">{count}</h1>
        <button id="increment" onClick={increment} className="button">Increment</button>
        <button id="reset" onClick={reset} className="button">Reset</button>
        <button id="decrement" onClick={decrement} className="button">Decrement</button>
        </div>
    )
}

export default Counter




