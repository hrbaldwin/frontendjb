import React from "react";
import { useNavigate } from "react-router-dom";
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
      <div className="logInBox">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" required />
          <label htmlFor="password">Password:</label>
          <input type="text" required />
          <button className="logInSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LogInOut;
