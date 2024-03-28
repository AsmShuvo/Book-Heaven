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
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md:px-20'>
            {
                books.map(book => <Book key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default Books;