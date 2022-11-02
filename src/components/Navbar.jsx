import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {



  return (
    <>
      <div id="navbar">
        <h2>Front End</h2>
        <Link to={'/addPost'}><button>Add Post</button></ Link>
        <Link to={'/login'}><button>Log In</button></ Link>

      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
