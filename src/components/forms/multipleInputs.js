import React, { useState } from 'react';

const MultipleInputs=()=>{

    const [userRegistration,setUserRegistration]= useState({
            FirstName:"",
            LastName:"",
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
        console.log(records);
        setRecords([...records,newRecord]);
        console.log(records);
        setUserRegistration({ FirstName:"",LastName:"",Email:"",Password:"" });

    }

    return(
    <div>
        <h1>***** Sign Up *****</h1>
        <form action="" onSubmit={handelSubmit}>
            <lable name="FirstName">FirstName </lable>
            <input type="text" autoComplete="off" name="FirstName"
            value={userRegistration.FirstName}
            onChange={handelInput}
            /><br></br>
            <lable name="LastName">LastName </lable>
            <input type="text"  autoComplete="off" name="LastName"
            value={userRegistration.LastName}
            onChange={handelInput}
            /><br></br>
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
                    {
                        records.map((element,index)=>{
                            return (<div style={{margin:"auto"}}key="element" >
                                <p style={{margin:"auto"}}>{element.FirstName}</p>
                                <p style={{margin:"auto"}}>{element.LastName}</p>
                                <p style={{margin:"auto"}}>{element.Email}</p>
                                <p style={{margin:"auto"}}>{element.Password}</p>
                            </div>)
                    })}
        </div>

    </div>
    )
}

export default MultipleInputs;
