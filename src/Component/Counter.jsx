import React , {useState} from "react";
import './Produts.css';
 function Counter() {
    const [count, setCount] = useState(0); 
   const [packet, setPacket] = useState(0);

   function increment() {
        setPacket(value => value + 1 );
 }
    function decrement() {
        setPacket(value => value - 1);
    }

    return (
        <>
            
            <button onClick={() => {
                increment();
            }}>+1</button>
            <button >Number Packet </button>
              <button onClick={() => {
                decrement();
            }}>-1</button>

            <p> Your {packet} item </p>
            <button className="border" onClick={() => setCount(count + 1)}>Add Cart</button>
        </>
    );
 }

 export default Counter;