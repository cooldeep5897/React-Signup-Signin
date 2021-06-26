import React from 'react';
import { NavLink } from 'react-router-dom';
const HomePage = () => {
  return <React.Fragment>
        <div className="m-2">
            <h1>*****Home Page*****</h1>
            <NavLink to="/Signup"  activeClassName="active">
                <button style={{fontSize:15}}>Sign Up</button>
            </NavLink>&nbsp;<br></br><br></br>
            <NavLink to="/login" activeClassName="active">
                <button style={{fontSize:15}}>Log In</button>
            </NavLink>&nbsp;
        </div>
        </React.Fragment>;
};

export default HomePage;