import { UseEffect,UseState } from "react"

function Api() {
 const[user,setUser]=UseState("")
 UseEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => setUser(res))
 })

  return (
    <div>
      {user.map(u=>{
        <div>

        {u.name}{u.email}{u.id}    
            
        </div>
      })}
    </div>
  );
}

export default Api
