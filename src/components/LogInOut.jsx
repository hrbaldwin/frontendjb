import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInUser } from "../api";

const LogInOut = () => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const username = event.target[0].value;
      const password = event.target[1].value;
      const registeredUser = await logInUser(username, password);
      const token = registeredUser.token;
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="formBoxDiv">
        <h3 className="headerThree">log in below</h3>
        <form onSubmit={handleSubmit} className="formBox">
          <label htmlFor="username">Username:</label>
          <input type="text" required />
          <label htmlFor="password">Password:</label>
          <input type="text" required />
          <button className="submitButton" type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LogInOut;
