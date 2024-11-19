import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCatagories(data.data.news_category));
  }, []);
  return (
    <div className="flex flex-col justify-start">
      <h2 className="font-semibold mb-2">All Caterogy</h2>
      <div className="flex flex-col gap-2 "> 
        {catagories.map((catagory) => 
          <NavLink
          to={`/catagory/${catagory.category_id}`} className="btn bg-white" key={catagory.category_id}>
            {catagory.category_name}
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default LeftNavbar;
