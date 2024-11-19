import React from "react";
import { Link } from "react-router-dom";
import usetIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/career">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="">
          <img src={usetIcon} alt="" />
        </div>
          <button className="btn btn-neutral rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
