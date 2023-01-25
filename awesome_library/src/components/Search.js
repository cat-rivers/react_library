import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import BookCardContainer from "./BookContainer";

function Search() {
  const [searchField, setSearchField] = useState("");

  const filteredBooks = bookDetails.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchField.toLowerCase()) ||
      book.author.toLowerCase().includes(searchField.toLowerCase()) ||
      book.isbn.includes(searchField)
    );
  });
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredBooks={filteredBooks} />
      </Scroll>
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    searchList();
  };

  return (
    <section>
      <div>
        <h2>Search</h2>
      </div>
      <form
        onSubmit={() => {
          console.log("miau");
        }}
      >
        <label> Search: </label>
        <input
          type="search"
          placeholder="Search for a book"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          {" "}
          Submit{" "}
        </button>
      </form>
      <br />
      {searchList()}
      <br />
    </section>
  );
}

export default Search;
