import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";
import ListHeader from "./ListHeader";

const Category = () => {
  const books = useLoaderData();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryOnChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filterBooksByCategory = (books, category) => {
    if (!category) {
      return books;
    } else {
      return books.filter((book) => book.category.includes(category));
    }
  };

  const filterBooks = filterBooksByCategory(books, selectedCategory);

  console.log(filterBooks);

  return (
    <div>
        <ListHeader text={"You can choice books category wise here"}/>
      <label className="form-control w-32 md:w-full max-w-xs mx-auto">
        <div className="label">
          <span className="label-text text-center mx-auto font-semibold text-primary">
            Pick the category you want
          </span>
        </div>
        <select
          className="select select-bordered"
          onChange={handleCategoryOnChange}
          value={selectedCategory}
        >
          <option selected value="">
            Any
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Literary">Literary</option>
          <option value="Science">Science</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
        </select>
      </label>

      <div className="grid grid-cols-1  md:grid-cols-3 mx-10">
        {filterBooks.map((book) => (
          <Book book={book} />
        ))}
      </div>
    </div>
  );
};

export default Category;
