import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    // console.log("data loaderd: ",books);
    return (
        <div className='grid grid-cols-2 '>
            {
                books.map(book => <Book key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default Books;