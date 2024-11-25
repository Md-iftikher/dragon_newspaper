import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

const Register = () => {
    const {createNewUser,setUser}=useContext(Authcontext);
  const handleSubmit = (e) => {
    e.preventDefault();
    //get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
  

    createNewUser(email,password)
    .then(res=>{
      
        const currentuser=res.user
        setUser(currentuser);      
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       

      });
    
  };


  return (
    <div>
      <div>
        <div class="min-h-screen flex justify-center items-center">
          <div class="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
            <h2 className="text-2xl font-semibold text-center">
              {" "}
              Register Your Account
            </h2>
            <form onSubmit={handleSubmit} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo Url"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-neutral">Register</button>
              </div>
            </form>
            <p className="text-center font-semibold">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-blue-600 hover:text-blue-
                600"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
