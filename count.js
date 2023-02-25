import { useState } from "react";

function Counter (){
    const  [count,setCount] = useState(100,"K");
    return(

        <div className="container p-20 m-10 mx-auto mt-5 bg-gray">
        <div className="flex mx-auto">
           
            <button className="p-2 px-3 font-bold text-white bg-black rounded-full" onClick={() => setCount( count + 1 )}>Subscribe</button>
            <h2 className="mx-auto"> Subscriber :{count}</h2>
           

        </div>
        </div>
    );
}

export default Counter;