import { useEffect, useState } from "react";

function Color() {
    const [color, setColor] = useState("red");
    useEffect(()=>{
        alert("nwojo")
    },[color]);

    return (
        <div className="container mx-auto border-8 border-indigo-600 bg-tahiti">
            <div className="flex flex-col ">
                <h1 className="mx-auto mt-5 text-lg text-white ">My Favorite Color Is  {color}!</h1>
                <button className="w-1/3 p-3 mx-auto my-3 text-2xl text-white rounded bg-midnight " onClick={() => setColor("blue")}>Blue</button>
                <button className="w-1/3 p-3 mx-auto my-3 text-2xl text-white rounded bg-oranage" onClick={() => setColor("orange")}>Orange</button>
                <button className="w-1/3 p-3 mx-auto my-3 text-2xl text-white rounded bg-rose " onClick={() => setColor("rose")}>Rose</button>
                <button className="w-1/3 p-3 mx-auto my-3 text-2xl text-white bg-black rounded " onClick={() => setColor("black")}>Black</button>
                <button className="w-1/3 p-3 mx-auto my-3 text-2xl text-white rounded bg-yellow " onClick={() => setColor("yellow")}>Yellow</button>
            </div>
        </div>
    );
}
export default Color;