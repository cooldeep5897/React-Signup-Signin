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
        <div  className="user">
             <header className="user__header"> <h1 class="user__title">***** Login *****</h1></header>
            <form className="form" action="" onSubmit={submitForm}>
            <div class="form__group">
            <input className='form__input' placeholder="Email" type="email" autoComplete="off" name="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            /></div>
           <div class="form__group">
            <input className='form__input' placeholder="Password" type="password" autoComplete="off"  name="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            /></div>
            <button class="btn" type="submit">Sign Up</button>
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