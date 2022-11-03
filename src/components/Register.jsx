import React from 'react';
import { RegisterUser } from '../api';
import { useNavigate } from 'react-router-dom';

const Register = () =>{
 const navigate = useNavigate();

    async function handleSubmit(event) {
        try {
          event.preventDefault();
          const username = event.target[0].value;
          const password = event.target[1].value;
          const token = await RegisterUser(username, password, name, location);
          localStorage.removeItem("token");
          localStorage.setItem("token", token);
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      }
    
    return(
        <div className="formBoxDiv">
        <form onSubmit={handleSubmit} className="formBox">
        <label htmlFor="name">Full Name:</label>
          <input type="text" placeholder=""required />
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder=""required />
          <label htmlFor="password">Password:</label>
          <input type="text" required />
          <label htmlFor="password">Location:</label>
          <input type="text" required />
          <button className="submitButton" type="submit">
            Register
          </button>
        
        </form>
        </div>
    )
}

export default Register;