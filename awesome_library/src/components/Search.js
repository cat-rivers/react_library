import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import "./Search.css";

function Search({ bookDetails }) {
  const [searchField, setSearchField] = useState("");
  const [searchGo, setSearchGo] = useState("");

  const filteredBooks = bookDetails.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchGo.toLowerCase()) ||
      book.author.toLowerCase().includes(searchGo.toLowerCase()) ||
      book.isbn.includes(searchGo)
    );
  });

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredBooks={filteredBooks} />
      </Scroll>
    );
  }

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchGo(searchField);
  };

  return (
    <section className="search-section">
      <div>
        <h2>Search</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <h3> Search for book </h3>
        <input
          type="search"
          placeholder="Search for a book"
          onChange={handleChange}
        />
        <button type="submit"> Submit </button>
      </form>
      <br />
      {searchList()}
      <br />

    </section>
  );
}

export default Search;
