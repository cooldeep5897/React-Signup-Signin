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
    <div  className="user">
       <header className="user__header"> <h1 class="user__title">***** Sign Up *****</h1></header>
        <form className="form" action="" onSubmit={handelSubmit}>
        <div class="form__group">
            <input className='form__input' placeholder="FirstName"  type="text" autoComplete="off" name="FirstName"
            value={userRegistration.FirstName}
            onChange={handelInput}
            />
            </div>
            <div class="form__group">
            <input className='form__input' placeholder="LastName" type="text"  autoComplete="off" name="LastName"
            value={userRegistration.LastName}
            onChange={handelInput}
            /></div>
            <div class="form__group">
            <input className='form__input' placeholder="Email" type="email" autoComplete="off" name="Email"
            value={userRegistration.Email}
            onChange={handelInput}
            />
            </div>
            <div class="form__group">
            <input className='form__input' placeholder="Password" type="password" autoComplete="off"  name="Password"
            value={userRegistration.Password}
            onChange={handelInput} 
            />
            </div>
            <button class="btn" type="submit">Sign Up</button>
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
