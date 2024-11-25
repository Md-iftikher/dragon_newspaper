import React, { useContext } from "react";
import { Link } from "react-router-dom";
import usetIcon from "../assets/user.png";
import { Authcontext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user,logout } = useContext(Authcontext);
  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/career">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="">
          <img src={usetIcon} alt="" />
        </div>
        {user && user.email ? (
          <button onClick={logout} className="btn btn-neutral rounded-none">Logout</button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
