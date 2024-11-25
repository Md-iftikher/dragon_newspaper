import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(Authcontext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
      .then((res) => {
        const user = res.user;
       
        
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      
        
      });
  };
  return (
    <div>
      <div class="min-h-screen flex justify-center items-center">
        <div class="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">
            {" "}
            Login Your Account
          </h2>
          <form onSubmit={handleLoginSubmit} class="card-body">
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
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-neutral">Login</button>
            </div>
          </form>
          <p className="text-center font-semibold">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-blue-600 hover:text-blue-
                600"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
