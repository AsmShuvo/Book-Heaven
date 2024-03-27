import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isBookExists, saveBookToLocaalStorage, saveWishlistToLocalStorage } from "./LocalStorage";
const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams(); //bookId is string here

  const book = books.find((book) => book.bookId === bookId); // both string
  // console.log(book);
  const {
    bookName,
    author,
    image,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  console.log(bookName);

  const handleSaveToLocalStorage= ()=>{
    if(isBookExists(parseInt(bookId))){
      const error = new Error('This boook is aleary added');
      toast.error(error.message);
    }
    else{
      toast("Added to the list");
      saveBookToLocaalStorage(parseInt(bookId));
    }
    
  }

  const handleSaveToWishlist = ()=>{
    if(isBookExists(parseInt(bookId))){
      const error = new Error('This book is already read by you');
      toast.error(error.message);
    }
    else{
      toast("Added to wishlist");
      saveWishlistToLocalStorage(parseInt(bookId));
    }
  }

  return (
    <div>
      <div className="card lg:card-side bg-base-100 border mx-20 p-4">
        <figure className="p-4 bg-gray-100 w-1/2">
          <img
          className="w-48"
            src={`../../public/images/${image}.png`}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-semibold">{bookName}</h2>
          <p className="text-lg font-semibold text-gray-500">By: {author}</p>
          <hr/>
          <p className="text-gray-600 font-semibold">{category}</p>
          <hr/>
          <p className="text-gray-500"><span className="font-semibold text-black">Review: </span>{review}</p>
          <div className="flex w-1/2 gap-2 justify-between items-center">
            <h1 className="font-semibold text-black mr-4">Tags</h1>
            <p className="border rounded-full text-amber-400 bg-gray-50 border-amber-400 text-center font-semibold w-fit">#{tags[0]}</p>
            <p className="border rounded-full text-amber-400 bg-gray-50 border-amber-400 text-center font-semibold w-fit">#{tags[1]}</p>
          </div>
          <hr/>
          <p className="flex justify-between w-2/3 items-center">Number of pages : <span className="font-semibold" >{totalPages}</span></p>
          <p className="flex justify-between w-2/3 items-center">Publisher : <span className="font-semibold" >{publisher}</span></p>
          <p className="flex justify-between w-2/3 items-center">Year of Publishing : <span className="font-semibold" >{yearOfPublishing}</span></p>
          <p className="flex justify-between w-2/3 items-center">Rating : <span className="font-semibold" >{rating}</span></p>
          <div className="card-actions justify-start my-2 flex gap-2">
            <button onClick={handleSaveToLocalStorage} className="btn btn-outline btn-primary">Read</button>
            <button onClick={handleSaveToWishlist} className="btn btn-primary" >Wishlist</button>
          </div>
        </div>
      </div>
      {/* toastify */}
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
