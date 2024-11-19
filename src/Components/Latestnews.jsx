import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Latestnews = () => {
  return (
    <div className="flex gap-2 items-center">
      <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>

      <Marquee pauseOnHover className="space-x-10 bg-base-200">
        <Link to="/news" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ipsam
          odit reprehenderit nisi vel repudiandae. Recusandae ad quas totam
          soluta.
        </Link>
        <Link to="/news" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ipsam
          odit reprehenderit nisi vel repudiandae. Recusandae ad quas totam
          soluta.
        </Link>
        <Link to="/news" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ipsam
          odit reprehenderit nisi vel repudiandae. Recusandae ad quas totam
          soluta.
        </Link>
      </Marquee>
    </div>
  );
};

export default Latestnews;
