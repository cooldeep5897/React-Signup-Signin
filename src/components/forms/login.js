import React,{ useState } from "react";

const Login=()=>{
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

   const [allEntry,setAllEntry]=useState([]);

   const submitForm=(e)=>{
       e.preventDefault();
        const newEntry={email:email,password:password};

        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);
   }

    return(
        <div>
            <h1>***** Login *****</h1>
            <form action="" onSubmit={submitForm}>
            <lable name="email">Email</lable>
            <input type="email" autoComplete="off" name="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            /><br></br>
            <lable name="password">Password </lable>
            <input type="password" autoComplete="off"  name="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            /><br></br>
            <button type="submit">Sign Up</button>
        </form>
        <div>
        {   allEntry.map((element)=>{
                return (<div style={{margin:"auto"}}key={element.email} >
                            <p style={{margin:"auto"}}>{element.email}</p>
                            <p style={{margin:"auto"}}>{element.password}</p>
                        </div>
                )
        })}
        </div>
        </div>
    )
}

export default Login;