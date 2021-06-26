import { element } from "prop-types";
import React,{ useState } from "react";

const Login=()=>{
    const[userRegistration,setUserRegistration]= useState({
        Email:"",
        Password:""
   });

   const [records,setRecords]=useState([]);

    const handelInput =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);

        setUserRegistration({...userRegistration,[name]:value});

    }

    const handelSubmit=(e)=>{
        e.preventDefault();

        const newRecord ={...userRegistration}
        setRecords([...records,newRecord]);
        console.log(records);
        setUserRegistration({Email:"",Password:"" });

    }

    return(
        <div>
            <h1>***** Login *****</h1>
            <form action="" onSubmit={handelSubmit}>
            <lable name="Email">Email</lable>
            <input type="email" autoComplete="off" name="Email"
            value={userRegistration.Email}
            onChange={handelInput}
            /><br></br>
            <lable name="Password">Password </lable>
            <input type="password" autoComplete="off"  name="Password"
            value={userRegistration.Password}
            onChange={handelInput} 
            /><br></br>
            <button type="submit">Sign Up</button>
        </form>
        <div>
        {   records.map((element)=>{
                return (<div style={{margin:"auto"}}key={element.Email} >
                    <p style={{margin:"auto"}}>{element.Email}</p>
                    <p style={{margin:"auto"}}>{element.Password}</p>
                </div>)
        })}
        </div>
        </div>
    )
}

export default Login;