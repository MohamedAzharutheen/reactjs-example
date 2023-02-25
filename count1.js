import React from 'react'
import { useState } from 'react'

// function Count1() {

// const[count,setCount]=useState("blue");

//   return (
//     <div>
//       <button onClick={()=>setCount(count + 1)}>Plus</button>
//       <h2>count {count}</h2>
//       <button onClick={()=>setCount(count - 1)}>Minus</button>
//     </div>
//   );
// }

// export default Count1;

function Count1(){
    const[count,setCount]=useState(0)

    return(
        <div>
            
            <button  className='p-2 m-3 rounded bg-tahiti 'onClick={()=>setCount(count +1)}>plus</button>
            <h1>count {count}</h1>
            <button className='p-2 m-3 rounded bg-tahiti ' onClick={()=>setCount(count -1)}>minus</button><br></br>
            <button className='p-2 m-3 rounded bg-tahiti' onClick={()=>setCount( 0)}>Clear</button>
        </div>
    );
}

export default Count1;