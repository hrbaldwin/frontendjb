import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  window.onscroll = function () {
    myFunction();
  };
  return (
    <>
      <div id="navbar">
        <Link to={"/"} id="navbarHeaderLink">
          <h2 id="navbarHeader">dreamscape</h2>
        </Link>
        <div className="navbarButtons">
          <Link to={"/addPost"}>
            <button className="navbarButton">create post</button>
          </Link>
          <Link to={"/login"}>
            <button className="navbarButton">log in</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
