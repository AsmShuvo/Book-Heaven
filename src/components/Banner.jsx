import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="md:mx-20 ">
      <div className="card lg:card-side bg-base-200 p-5">
        <div className="card-body">
          <div className="h-full flex flex-col justify-center">
            <h2 className="card-title text-5xl font-bold play my-6">Books to freshen up your bookshelf</h2>
            <div className="card-actions justify-start">
              <Link to="/read"><button className="btn btn-success">View The List</button></Link>
            </div>
          </div>
        </div>
        <figure>
          <img
            className="w-[350px]"
            src="/images/banner.png"
            alt="Album"
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
