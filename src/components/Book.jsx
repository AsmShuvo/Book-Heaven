import React from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <Link to={`/book/${bookId}`}>
        <div  className=" w-fit m-2 rounded-md mx-auto my-10">
      <div className="card md:w-96 bg-slate-50  md:p-4">
        <figure className="bg-slate-200 p-1 md:p-6">
          <img className="" src={`/images/${image}.png`} alt="book-img" />
        </figure>
        <div className="card-body">
            <div className="card-actions justify-start">
            <div className="badge badge-primary badge-outline">{tags[1]}</div>
                <div className="badge badge-secondary badge-outline ">{tags[0]}</div>
                
            </div>
            <h2 className="card-title">
                <h1 className="font-bold text-xl">{bookName}</h1>
                <div className="badge badge-secondary">available</div>
            </h2>
            <p className="font-semibold text-gray-500 text-lg">By: {author}</p>
            <hr />
            <div className="flex gap-2">
                <p className="text-gray-500 text-md">{category}</p>
                <p className="font-bold flex gap-2 items-center text-lg"><FcRating />{rating}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
