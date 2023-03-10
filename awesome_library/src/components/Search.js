import React, { useState } from "react";
import "./Search.css";
import SearchBookCard from "./SearchBookCard";

function Search({ bookDetails, setBookDetails }) {
  const [searchField, setSearchField] = useState("");
  const [searchString, setSearchString] = useState("");

  const filteredBooks = bookDetails.filter((book) => {
    let result = true;
    searchString
      .toLowerCase()
      .split(" ")
      .forEach((word) => {
        if (
          (book.title + book.author + book.isbn)
            .toLowerCase()
            .includes(word) === false
        ) {
          result = false;
        }
      });
    return result;
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchString(searchField);
  };

  const SearchList = () => {
    const filtered = filteredBooks.map(book => (
      <SearchBookCard key={book.id} book={book} />
    ));
    return <div>{filtered}</div>;
  };

  return (
    <div className="search-section">
      <form className="form-class" id="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="book, author or isbn"
          onChange={handleChange}
        />
        <button className="search-btn" type="submit">
          {" "}
          Search{" "}
        </button>
      </form>
      <div className="results">
        <br />
        {searchString !== "" && (
          <div>
            {filteredBooks.length > 0 ? (
              <SearchList />
            ) : (
              <div>
                <br />
                Book not found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
