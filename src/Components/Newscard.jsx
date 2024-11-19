import React from "react";
import { FaStar, FaEye } from "react-icons/fa";

const Newscard = ({ news }) => {
  return (
    <div className=" rounded-lg border shadow-md bg-white overflow-hidden m-2">
      {/* Header Section */}
      <div className="flex items-center px-4 py-2 bg-gray-100">
        <img
          src={news.author?.img}
          alt={news.author?.name}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <p className="text-gray-800 font-semibold">{news.author?.name}</p>
          <p className="text-sm text-gray-500">{news.author?.published_date}</p>
        </div>
      </div>

      {/* Image */}
      {news.image_url && (
        <img
          className="w-full object-cover h-48"
          src={news.image_url}
          alt="News Thumbnail"
        />
      )}

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{news.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{news.details.slice(0, 100)}...</p>
        <a href="#" className="text-blue-500 text-sm mt-2 block">
          Read More
        </a>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between px-4 py-2 border-t bg-gray-50">
        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          <FaStar />
          <span className="ml-1 text-gray-800 text-sm">{news.rating?.number}</span>
          <span className="ml-2 text-sm text-gray-500">{news.rating?.badge}</span>
        </div>
        {/* Views */}
        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" />
          <span className="text-sm">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
