import React, { useEffect } from "react";
import { IoPeople } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { TbCategory } from "react-icons/tb";
import { FaPenNib } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";
import Tabs from "./Tabs";
import { Link } from "react-router-dom";



const ShowListedBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    image,
  } = book;

  

  return (
    
    <div className="flex border p-2 md:w-[800px] mx-auto m-4 rounded-lg">
      
      <div className="card card-side bg-base-100 flex-col md:flex-row">
        <figure className="bg-gray-200 p-2 md:p-8  rounded-lg">
          <img className="w-32 md:w-full" src={`/images/${image}.png`} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex gap-2  items-center"> {bookName}</h2>
          <p className="flex gap-2 items-center">By: {author}</p>
          <p className="flex flex-col md:flex-row gap-2 items-center">
          <div className="flex items-center gap-1">
          
            Tags
          </div>
            <div className="flex gap-2">
              <p className=" border border-orange-200 rounded-full p-1 text-orange-500 text-sm bg-blue-100">{tags[0]}</p>
              <p className=" border border-orange-200 rounded-full p-1 text-orange-500 text-sm bg-blue-100">{tags[1]}</p>
            </div>
            <p className="flex gap-1 items-center"> <CiTimer /> Year of Publishing : {yearOfPublishing}</p>
          </p>
          <div className="flex flex-col md:flex-row ">
            <p className="flex gap-1 items-center"> Publisher: {publisher}</p>
            <p className="flex gap-1 items-center"> Pages: {totalPages}</p>
          </div>
          <hr/>
          <div className="card-actions justify-start items-center" >
            <p className="flex gap-2 items-center rounded-full p-1 text-sm border-blue-400 text-blue-500 bg-gray-100"><TbCategory /> Catergory : {category} </p>
            <p className="flex gap-2 items-center rounded-full p-1 text-sm border-amber-400 text-amber-500 bg-gray-200"><CiStar /> Ratings: {rating}</p>
            <Link to={`/book/${bookId}`}><button className="btn btn-warning text-white font-semibold rounded-full">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowListedBook;
