import React, { useEffect, useState } from "react";
import { getStoredBook, getWishlistedBooks } from "./LocalStorage";
import { useLoaderData } from "react-router-dom";
import ShowListedBook from "./ShowListedBook";
import ListHeader from "./ListHeader";
import Tabs from "./Tabs";

const WishList = () => {
  const [list, setList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    fetch("../../public/books.json")
      .then((res) => res.json())
      .then((data) => {
        const storedBooks = getWishlistedBooks();
        console.log(storedBooks);
        if (storedBooks.length > 0) {
          const booksAdded = [];
          for (const id of storedBooks) {
            const book = data.find((book) => book.bookId == id);
            if (book) {
              booksAdded.push(book);
            }
          }
          setList(booksAdded);
          setDisplayList(booksAdded);
          // console.log("book added: ", booksAdded);
        }
      });
  }, []);

  const handleFilter =(text)=>{
    let sortedList = [...list];
    if(text=='all'){
      setDisplayList(list);
    }
    else if(text=="ratings"){
      sortedList.sort((a,b)=> b.rating - a.rating);
    }
    else if(text=="pages"){
      sortedList.sort((b,a)=>a.totalPages - b.totalPages);
    }
    else if(text=="year"){
      sortedList.sort((b,a)=>a.yearOfPublishing-b.yearOfPublishing);
    }
    setDisplayList(sortedList);
  }


  return (
    <div className="text-center">


      {displayList.map((book) => (
        <ShowListedBook key={book.bookId} book={book} />
      ))}
      
    </div>
  );
};

export default WishList;
