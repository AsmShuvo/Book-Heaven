const getStoredBook = ()=>{
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        const x = JSON.parse(storedBooks);
        return x;
    }
    return [];
}
const getWishlistedBooks = ()=>{
    const wishlistedBooks = localStorage.getItem('wishlist');
    if(wishlistedBooks){
        return JSON.parse(wishlistedBooks);
    }
    return [];
}

export const isBookExists = (id)=>{
    const storedBooks = getStoredBook();
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
const saveWishlistToLocalStorage = (id)=>{
    const wishlistedBook = getWishlistedBooks();
    if(!isBookExists(id)){
        wishlistedBook.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlistedBook));
        return false;
    }
}

export {getStoredBook,getWishlistedBooks, saveWishlistToLocalStorage, saveBookToLocaalStorage};