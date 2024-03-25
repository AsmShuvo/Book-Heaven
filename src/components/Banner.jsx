import React from "react";
const Banner = () => {
  return (
    <div className="mx-20 ">
      <div className="card lg:card-side bg-base-200 p-5">
        <div className="card-body">
          <div className="h-full flex flex-col justify-center">
            <h2 className="card-title text-5xl font-bold my-6">Books to freshen up your bookshelf</h2>
            <div className="card-actions justify-start">
              <button className="btn btn-success">View The List</button>
            </div>
          </div>
        </div>
        <figure>
          <img
            className="w-[350px]"
            src="../../public/images/banner.png"
            alt="Album"
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;