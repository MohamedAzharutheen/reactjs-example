import { useState } from "react"


function Login(){


    const[form,setForm]=useState({
        email:"",
        password:"",
    });

    
console.log(form)




    return(
    

       
 <div className="h-screen p-5 bg-tahiti">

<div className="flex flex-col items-center p-5 m-3 rounded md:my-20 md:mx-20 lg:my-20 lg:mx-60 bg-rose">
{/* 
    <pre>{JSON.stringify(form)}</pre> */}
    
    <input className="p-2 m-2 rounded"
        type={"email"}
        placeholder="enter your email"
        name="email" autoComplete={"off"}
        value={form.email}
        onChange={e=>setForm({...form,email: e.target.value})}
        />
       
   
    <input className="p-2 m-2 rounded "
        type={"password"}
        placeholder="enter your password"
        value={form.password}
        onChange={e=>setForm({...form,password: e.target.value})}
        name="password" />
    
    <button className="p-2 mb-2 rounded bg-tahiti"
        type={"submit"}>submit</button> 
   
  
    </div>  </div>
    
    



  
           

      
   

    )
}

export default Login