import React, { useState } from "react";

function Count() {
    let [state,setState]=useState(0)
    const incr=()=>{
      setState(state+1)
    }
    const decr=()=>{
      setState(state-1)
    }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{state}</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         <button onClick={decr} style={{margin:'4px'}}>-</button> <button onClick={incr}>+</button>
      </div>
    </div>
  );
}

export default Count;
