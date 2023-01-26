import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import "./Search.css";
import SearchModal from "./SearchModal";

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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a book"
          onChange={handleChange}
        />
        <button type="submit"> Search </button>
      </form>
      {searchGo === "" ? (
        <div>
          <div>
            <h3 className="search-subtitle">All books</h3>
          </div>
          {searchList()}
        </div>
      ) : (
        <div>
          <h3 className="search-subtitle">Search results</h3>
          {searchList()}
        </div>
      )}
    </section>
  );
}

export default Search;
