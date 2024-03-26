import React, { useEffect, useState } from "react";
import { getStoredBook } from "./LocalStorage";
import { useLoaderData } from "react-router-dom";
import ShowListedBook from "./ShowListedBook";
import ListHeader from "./ListHeader";

const ReadList = () => {
    const [list, setList] = useState([]);
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
            console.log("book added: ", booksAdded);
          } else {
            setList(data);
          }
        });
    }, []);
  
    return (
      <div>
        <ListHeader/>
        {list.map((book) => (
          <ShowListedBook key={book.bookId} book={book} />
        ))}
      </div>
    );
  };

export default ReadList;
