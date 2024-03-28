import React, { useEffect, useState } from "react";
import { getStoredBook, getWishlistedBooks } from "./LocalStorage";
import { useLoaderData } from "react-router-dom";
import ShowListedBook from "./ShowListedBook";
import ListHeader from "./ListHeader";
import Tabs from "./Tabs";
import WishList from "./WishList";

const ReadList = () => {
  const [list, setList] = useState([]);
  const [displayList, setDisplayList] = useState([]);

  const [list2, setList2] = useState([]);
  const [displayList2, setDisplayList2] = useState([]);

  const [activeTab , setActiveTab] = useState("read-list");
  useEffect(() => {
    fetch("/books.json")
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

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        const storedBooks = getWishlistedBooks();
        if (storedBooks.length > 0) {
          const booksAdded = [];
          for (const id of storedBooks) {
            const book = data.find((book) => book.bookId == id);
            if (book) {
              booksAdded.push(book);
            }
          }
          setList2(booksAdded);
          setDisplayList2(booksAdded);
          // console.log("book added: ", booksAdded);
        }
      });
  }, []);

  const handleFilter = (text) => {
    let sortedList = [...list];
    if (text == "all") {
      setDisplayList(list);
    } else if (text == "ratings") {
      sortedList.sort((a, b) => b.rating - a.rating);
    } else if (text == "pages") {
      sortedList.sort((b, a) => a.totalPages - b.totalPages);
    } else if (text == "year") {
      sortedList.sort((b, a) => a.yearOfPublishing - b.yearOfPublishing);
    }
    setDisplayList(sortedList);
  };

  const handleFilter2 = (text) => {
    let sortedList = [...list2];
    if (text == "all") {
      setDisplayList2(list2);
    } else if (text == "ratings") {
      sortedList.sort((a, b) => b.rating - a.rating);
    } else if (text == "pages") {
      sortedList.sort((b, a) => a.totalPages - b.totalPages);
    } else if (text == "year") {
      sortedList.sort((b, a) => a.yearOfPublishing - b.yearOfPublishing);
    }
    setDisplayList2(sortedList);
  };

  return (
    <div className="text-center">
      <details className="dropdown">
        <summary className="m-1 btn btn-warning text-white w-full">
          Filter
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
          <li
            onClick={(e) => {
              e.stopPropagation();
              handleFilter("all");
              handleFilter2("all");
            }}
          >
            <a>All</a>
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              handleFilter("ratings");
              handleFilter2("ratings");
            }}
          >
            <a>Rating</a>
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              handleFilter("pages");
              handleFilter2("pages");
            }}
          >
            <a>Pages</a>
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              handleFilter("year");
              handleFilter2("year");
            }}
          >
            <a>Year</a>
          </li>
        </ul>
      </details>
      <ListHeader />

      <div role="tablist" className="tabs tabs-lifted mx-2 my-2 md:mx-20">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Readlist"
          value="read-list"
          checked = {activeTab==="read-list"}
          onChange={()=>setActiveTab("read-list")}
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
          aria-label="Wishlist"
          value="wishlist"
          checked={activeTab==="wishlist"}
          onChange={()=>setActiveTab("wishlist")}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {displayList2.map((book) => (
            <ShowListedBook key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadList;
