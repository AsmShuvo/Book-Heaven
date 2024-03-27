import React, { useEffect, useState } from "react";
import { getStoredBook } from "./LocalStorage";
import { useLoaderData } from "react-router-dom";
import ShowListedBook from "./ShowListedBook";
import ListHeader from "./ListHeader";
import Tabs from "./Tabs";

const ReadList = () => {
  const [list, setList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    fetch("../../public/books.json")
      .then((res) => res.json())
      .then((data) => {
        const storedBooks = getStoredBook();
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
      
      <details className="dropdown">
        <summary className="m-1 btn btn-warning text-white w-full">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
          <li onClick={()=>handleFilter("all")}>
            <a>All</a> 
          </li>
          <li onClick={()=>handleFilter("ratings")}>
            <a>Rating</a> 
          </li>
          <li  onClick={()=>handleFilter("pages")}>
            <a>Pages</a>
          </li>
          <li  onClick={()=>handleFilter("year")}>
            <a>Year</a>
          </li>
        </ul>
      </details>
      <ListHeader />

      <div role="tablist" className="tabs tabs-lifted mx-20">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read List"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {displayList.map((book) => (
        <ShowListedBook key={book.bookId} book={book} />
      ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>

        
      </div>
      
    </div>
  );
};

export default ReadList;
