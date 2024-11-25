import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-slate-50" >
      <header className="py-4 w-11/12 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </header>
    </div>
  );
};

export default AuthLayout;
