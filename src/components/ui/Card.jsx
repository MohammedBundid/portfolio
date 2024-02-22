import React from "react";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const Card = ({ title, img, hidden, desc, myLink }) => {
  return (
    <div
      className={`w-28 h-24 md:h-48 md:w-40 lg:w-52 lg:h-48 xl:w-56 xl:h-52 bg-gradient-to-r from-sky-950/30 to-zinc-200-500/30 rounded-md backdrop-blur-md cursor-pointer ${
        hidden ? "hidden" : ""
      }`}
    >
      <h1 className="lang-title">{title}</h1>
      <div className="w-1/2 h-1/2 m-auto">
        {!img ? (
          <div className=" text-xs mt-2">no preview available</div>
          
        ) : (
          <img
            className="w-full h-full hover:drop-shadow-2xl"
            src={img}
            alt={`image for ${title}`}
          />
        )}
      </div>
      <p className="px-2 text-center">{desc}</p>
      {!myLink === 'none' && (
        <Link
        className="text-center font-medium text-teal-500 mt-3 flex gap-2 items-center justify-center"
        to={myLink}
      >
        <p>go to site</p>
        <IoIosLogOut size={22} />
      </Link>
      )}
    </div>
  );
};

export default Card;
