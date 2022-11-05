import React from "react";
import { RegisterUser } from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const username = event.target[0].value;
      const password = event.target[1].value;
      const name = event.target[2].value;
      const location = event.target[3].value;
      const token = await RegisterUser(username, password, name, location);
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="formBoxDiv">
      <h3 className="headerThree">register here</h3>
      <form onSubmit={handleSubmit} className="formBoxLogIn">
        <label className="labels" htmlFor="name">
          Username:
        </label>
        <input className="inputs" type="text" placeholder="" required />
        <label className="labels" htmlFor="username">
          Password:
        </label>
        <input className="inputs" type="password" placeholder="" required />
        <label className="labels" htmlFor="password">
          Name:
        </label>
        <input className="inputs" type="text" required />
        <label className="labels" htmlFor="password">
          Location:
        </label>
        <input className="inputs" type="text" required />
        <button className="submitButton" type="submit">
          register
        </button>
      </form>
    </div>
  );
};

export default Register;
