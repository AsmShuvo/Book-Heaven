const getStoredBook = ()=>{
    const storedBooks = localStorage.getItem('books');
    // console.log(typeof storedBooks, storedBooks);
    if(storedBooks){
        const x = JSON.parse(storedBooks);
        // console.log(typeof x);
        return x;
    }
    return [];
}
export const isBookExists = (id)=>{
    // console.log(typeof id)
    const storedBooks = getStoredBook();
    // console.log(typeof storedBooks);
    // console.log("stored book: ",storedBooks)
    return storedBooks.find(book => book==id);
}

const saveBookToLocaalStorage  = id  =>{
    // console.log(id);
    const storedBooks = getStoredBook();
    if(!isBookExists(id)){
        storedBooks.push(id);
        localStorage.setItem('books', JSON.stringify(storedBooks));
    }
}

export {getStoredBook, saveBookToLocaalStorage};