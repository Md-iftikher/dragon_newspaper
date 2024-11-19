import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-3">Login With</h2>

      <div className="*:w-full space-y-2">
        <button className="btn">
          {" "}
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
